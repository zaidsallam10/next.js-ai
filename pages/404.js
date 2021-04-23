import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <div>
      <div class="alert alert-danger text-center" role="alert">
        Page not found!
      </div>
      <Link href="/" class="text-center">
        <button type="button" class="btn btn-primary ">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default Error;
