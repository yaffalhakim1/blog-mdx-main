import React from "react";
import Link from "next/link";

interface Cards {
  title?: string;
  tag?: string;
  description?: string;
  link?: string;
}

export default function Card(props: Cards) {
  return (
    <div>
      <Link href={props.link}>
        <div className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
          <div className="m-3">
            <h2 className="text-lg mb-2">
              {props.title}
              <span className="text-sm text-teal-800 font-normal bg-teal-100 inline rounded-full px-2 align-top float-right animate-pulse">
                {props.tag}
              </span>
            </h2>
            <p className="font-normal text-sm  hover:text-gray-900 transition-all duration-200">
              {props.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
