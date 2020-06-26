import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";

import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <div className="mb-5"></div>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly.
               </div>
            </div>

            <div className="card bg-secondary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly.
               </div>
            </div>
         </div>
         <Link to="/edit" type="button" className="btn btn-link">
            Edit
         </Link>
         <div className="float-right">
            <Link
               to="/review-empty"
               type="button"
               className="btn btn-outline-primary mr-4"
            >
               Needs Work
            </Link>

            <Link
               to="/review-imagery"
               type="button"
               className="btn btn-primary"
            >
               <img
                  src={thumbsUpIcon}
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "4px" }}
                  alt=""
               />
               Got it
            </Link>
         </div>
      </AppTemplate>
   );
}