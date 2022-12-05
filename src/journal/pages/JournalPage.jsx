import React from "react";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        <NoteView />
        {/* <NothingSelectedView /> */}
      </JournalLayout>
      ;
    </>
  );
};
