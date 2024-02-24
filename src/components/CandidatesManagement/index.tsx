"use client";

import Image from "next/image";
import CandidatesColumn from "../CandidatesColumn";
import { useMemo, useRef, useState } from "react";
import { Candidates } from "@/constants";
import { DropResult } from "@hello-pangea/dnd";
import dynamic from "next/dynamic";
import { CandidateType } from "@/models/common";

const DragDropContext = dynamic(() =>
  import("@hello-pangea/dnd").then((module) => module.DragDropContext)
);

const CandidatesManagement = () => {
  const [candidates, setCandidates] = useState(Candidates);
  const [searchResults, setSearchResults] = useState<CandidateType[]>([]);
  const searchTerm = useRef("");
  const filteredCandidates = searchTerm.current ? searchResults : candidates;

  const rejectedCandidates = useMemo(() => {
    return filteredCandidates
      .map((candidate, index) => ({
        ...candidate,
        index,
      }))
      .filter((candidate) => candidate.status === "rejected");
  }, [candidates, searchResults]);

  const appliedCandidates = useMemo(() => {
    return filteredCandidates
      .map((candidate, index) => ({
        ...candidate,
        index,
      }))
      .filter((candidate) => candidate.status === "applied");
  }, [candidates, searchResults]);

  const shortlistedCandidates = useMemo(() => {
    return filteredCandidates
      .map((candidate, index) => ({
        ...candidate,
        index,
      }))
      .filter((candidate) => candidate.status === "shortlisted");
  }, [candidates, searchResults]);

  const handleDropEnd = (result: DropResult) => {
    if (!result.destination) return null;
    console.log(result);

    const destinationType = result.destination.droppableId;
    const draggedId = result.draggableId;
    const sourceIndex = searchTerm.current
      ? candidates.map((candidate) => candidate.id).indexOf(draggedId)
      : result.source.index;
    const destinationIndex = result.destination.index;
    const draggedCandidate = candidates[sourceIndex];
    const newDestinationIndex = destinationIndex
      ? sourceIndex >= destinationIndex
        ? destinationIndex
        : destinationIndex - 1
      : 0;

    const updatedCandidates = [...candidates];
    updatedCandidates.splice(sourceIndex, 1);
    updatedCandidates.splice(newDestinationIndex, 0, {
      ...draggedCandidate,
      status: destinationType as "rejected" | "shortlisted" | "applied",
      last_updated: new Date(),
    });
    console.log(
      sourceIndex,
      newDestinationIndex,
      candidates,
      updatedCandidates
    );
    setCandidates(updatedCandidates);
    if (searchTerm.current) {
      const sourceIndex = result.source.index;
      const draggedCandidate = searchResults[sourceIndex];
      const updatedSearchResults = [...searchResults];
      updatedSearchResults.splice(sourceIndex, 1);
      updatedSearchResults.splice(newDestinationIndex, 0, {
        ...draggedCandidate,
        status: destinationType as "rejected" | "shortlisted" | "applied",
        last_updated: new Date(),
      });
      console.timeLog();
      setSearchResults(updatedSearchResults);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    searchTerm.current = term;

    const results = candidates.filter(
      (candidate) =>
        candidate.name.toLowerCase().includes(term) ||
        candidate.designation.toLowerCase().includes(term) ||
        (candidate.phone && candidate.phone.toLowerCase().includes(term)) ||
        (candidate.email && candidate.email.toLowerCase().includes(term))
    );

    setSearchResults(results);
  };

  return (
    <section className="p-6">
      <div className="flex items-center gap-2 border hover:border-[rgb(149_157_165)] rounded py-1 px-2 w-[240px] focus-within:border focus-within:border-[rgb(149_157_165)]">
        <Image alt="search" src="/assets/Search.svg" width={16} height={16} />
        <input
          placeholder="Search candidates"
          className="placeholder:text-sm text-sm outline-none w-full"
          onChange={handleSearch}
        />
      </div>
      <div className="mt-6 flex items-start gap-2">
        <DragDropContext onDragEnd={handleDropEnd}>
          <CandidatesColumn type="rejected" candidates={rejectedCandidates} />
          <CandidatesColumn type="applied" candidates={appliedCandidates} />
          <CandidatesColumn
            type="shortlisted"
            candidates={shortlistedCandidates}
          />
        </DragDropContext>
      </div>
    </section>
  );
};

export default CandidatesManagement;
