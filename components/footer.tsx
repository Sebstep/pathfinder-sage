import React from "react";
import Image from "next/image";

function Logo() {
    return (
        <div className="w-full text-lg font-extrabold md:w-fit md:text-left">
            <span className="text-eu-blue">Erasmus+ Pathfinder</span>{" "}
        </div>
    );
}

export default function MultiColumns() {
  return (
      <footer className="mx-auto flex flex-col items-start space-y-12 px-8 md:flex-row md:space-y-0 md:space-x-12 md:px-12 md:justify-between">
        {/* First Column */}
        <div className="flex w-full flex-col space-y-4 text-center md:w-5/12 md:text-left">
          <Logo />
          <p className="text-sm text-slate-600">
            Pioneering AI Technology in Higher Education to Facilitate Innovation and
            Nurture the Development of Entrepreneurial Resources
          </p>
          <p className="text-sm text-slate-600">
            Project:{" "}
            <a href="https://erasmus-plus.ec.europa.eu/projects/search/details/2023-2-LI01-KA220-HED-000178579">
              2023-2-LI01-KA220-HED-000178579
            </a>
          </p>
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Pathfinder Project. All rights reserved.
          </p>
        </div>
        {/* Fourth Column */}
        <div className="flex w-full flex-col space-y-4 text-center md:w-5/12 md:text-left">
          <div className="text-sm font-semibold">Declarations</div>
          <p className="text-sm text-slate-600">
            Funded by the European Union. Views and opinions expressed are however those
            of the author(s) only and do not necessarily reflect those of the European
            Union or the European Education and Culture Executive Agency (EACEA). Neither
            the European Union nor EACEA can be held responsible for them.
          </p>
          <Image
            src="/funded-by-eu-wide.png"
            alt=""
            width={200}
            height={200}
            className="w-full md:w-1/2"
          />
        </div>
      </footer>
  );
}