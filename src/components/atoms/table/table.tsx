import React from "react";

type TableProps = {
  status: string;
};

const Table: React.FC<TableProps> = () => {
  const chairColor = "bg-gray-300";
  return (
    <div className="relative p-7">
      <div className="w-24 h-24 rounded-full shadow bg-gradient-to-br from-gray-200 via-gray-300 to-gray-300 "></div>
      <section>
        <div
          className={`w-7 h-4 rounded shadow-md ${chairColor} absolute right-1 top-10 transform rotate-60`}
        ></div>
        <div
          className={`w-7 h-1.5 rounded shadow-md ${chairColor} absolute -right-1.5 top-10 transform rotate-60`}
        ></div>
      </section>
      <section>
        <div
          className={`w-7 h-4 rounded shadow-md ${chairColor} absolute left-1 top-10 transform -rotate-60`}
        ></div>
        <div
          className={`w-7 h-1.5 rounded shadow-md ${chairColor} absolute -left-1.5 top-10 transform -rotate-60`}
        ></div>
      </section>
      <section>
        <div
          className={`w-7 h-4 rounded shadow-md ${chairColor} absolute left-1 bottom-10 transform rotate-60`}
        ></div>

        <div
          className={`w-7 h-1.5 rounded shadow-md ${chairColor} absolute -left-1.5 bottom-10 transform rotate-60`}
        ></div>
      </section>

      <section>
        <div
          className={`w-7 h-4 rounded shadow-md ${chairColor} absolute left-1/2 -bottom-0.5 -translate-x-1/2 -translate-y-1/2`}
        ></div>

        <div
          className={`w-7 h-1.5 rounded shadow-md ${chairColor} absolute left-1/2 -bottom-1 -translate-x-1/2 -translate-y-1/2`}
        ></div>
      </section>
      <section>
        <div
          className={`w-7 h-4 rounded shadow-md ${chairColor} absolute left-1/2 top-4 -translate-x-1/2 -translate-y-1/2`}
        ></div>
      </section>

      <div
        className={`w-7 h-1.5 rounded shadow-md ${chairColor} absolute left-1/2 top-1 -translate-x-1/2 -translate-y-1/2`}
      ></div>

      <section>
        <div
          className={`w-7 h-4 rounded shadow-md ${chairColor} absolute right-1  bottom-10 transform -rotate-60`}
        ></div>

        <div
          className={`w-7 h-1.5 rounded shadow-md ${chairColor} absolute -right-1.5 bottom-10 transform -rotate-60`}
        ></div>
      </section>
    </div>
  );
};

export default Table;
