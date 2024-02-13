import React from "react";
import Typography from "../typography/typography";

type tableStatus = "PENDING" | "ACTIVE";
type objectTable = {
  tableColor: string;
  chairColor: string;
};
type TableProps = {
  label: string;
  status: string;
};

const Table: React.FC<TableProps> = ({ status = "ACTIVE", label }) => {
  const themes: Record<tableStatus, objectTable> = {
    ACTIVE: {
      tableColor: `bg-gradient-to-br from-rose-200 via-danger-light to-rose-300`,
      chairColor:
        "bg-gradient-to-br from-pink-200 via-danger-light to-danger-light",
    },
    PENDING: {
      tableColor: `bg-gradient-to-br from-gray-200 via-gray-300 to-gray-300`,
      chairColor: "bg-gray-300",
    },
  };

  const labelSplited = label?.split(" ");
  const labelMobile = `${labelSplited[0].slice(0, 1)} ${labelSplited[1]}`;

  return (
    <div className="relative p-7 inline-block cursor-pointer">
      <div
        className={`w-10 h-10  md:w-24 md:h-24 rounded-full shadow bg-gradient-to-br  ${
          themes[status as tableStatus].tableColor
        } flex items-center justify-center`}
      >
        <Typography
          label={labelMobile}
          variant="small"
          family="bold"
          color={`${status === "PENDING" ? "text-gray-600" : "text-white"}`}
          className="text-xs10 flex md:hidden"
        />
        <Typography
          label={label}
          variant="small"
          family="bold"
          className="hidden md:flex"
          color={`${status === "PENDING" ? "text-gray-600" : "text-white"}`}
        />
      </div>
      <section className="hidden md:flex">
        <div
          className={`w-7 h-4 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          } absolute right-1 top-10 transform rotate-60`}
        ></div>
        <div
          className={`w-7 h-1.5 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          }  absolute -right-1.5 top-10 transform rotate-60`}
        ></div>
      </section>
      <section className="hidden md:flex">
        <div
          className={`w-7 h-4 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          }  absolute left-1 top-10 transform -rotate-60`}
        ></div>
        <div
          className={`w-7 h-1.5 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          }   absolute -left-1.5 top-10 transform -rotate-60`}
        ></div>
      </section>
      <section>
        <div
          className={`w-4 h-3 md:w-7 md:h-4 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          }   absolute left-2 md:left-1 bottom-10 transform rotate-90 md:rotate-60`}
        ></div>
        <div
          className={`w-3 h-1 md:w-7 md:h-1.5 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          }   absolute -left-0 md:-left-1.5 bottom-11 md:bottom-10 transform rotate-90 md:rotate-60`}
        ></div>
      </section>
      <section>
        <div
          className={`w-4 h-3 md:w-7 md:h-4 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          }   absolute left-1/2  bottom-1.5 md:-bottom-0.5 -translate-x-1/2 -translate-y-1/2`}
        ></div>
        <div
          className={`w-3 h-1 md:w-7 md:h-1.5 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          }   absolute left-1/2 bottom-1 md:-bottom-1 -translate-x-1/2 -translate-y-1/2`}
        ></div>
      </section>
      <section>
        <div
          className={`w-4 h-3 md:w-7 md:h-4 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          }   absolute left-1/2 top-4 -translate-x-1/2 -translate-y-1/2`}
        ></div>
      </section>
      <section>
        <div
          className={`w-3 h-1 md:w-7 md:h-1.5 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          }   absolute left-1/2 top-1.5 md:top-1 -translate-x-1/2 -translate-y-1/2`}
        ></div>
      </section>
      <section>
        <div
          className={`w-4 h-3 md:w-7 md:h-4 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          }  absolute right-2 md:right-1 bottom-10 md:bottom-11 transform -rotate-90 md:-rotate-60`}
        ></div>

        <div
          className={`w-3 h-1 md:w-7 md:h-1.5 rounded shadow-md ${
            themes[status as tableStatus].chairColor
          }   absolute -right-0 md:-right-1.5 bottom-11 md:bottom-10 transform -rotate-90 md:-rotate-60`}
        ></div>
      </section>
    </div>
  );
};

export default Table;
