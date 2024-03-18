import { useState } from "react";
import ChildrenContent from "./ChildrenContent";
import AddChildrenForm from "./AddChildrenForm";

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChildrenContent onAddChild={() => setIsOpen(true)} />
      <AddChildrenForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Content;
