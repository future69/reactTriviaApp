import React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { NumberTextfield } from "../components/textfieldComponents";

export default function Home() {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-1/3 flex flex-col justify-center items-center text-center">
          <header className="text-5xl text-white">
            Welcome to my Trivia App
          </header>
          <div className="max-w-sm text-white pt-5 text-center">
            Welcome to this trivia app to showcase a simple backend API call to
            send & retrieve data
          </div>
        </div>
        <div className="flex-col w-full h-2/3 flex-row text-center bg-blue-500 text-white p-4 rounded">
          <div className="flex-col text-center">
            <FormControl className="w-2/3">
              <NumberTextfield label="Select Number of Questions" />
            </FormControl>
          </div>
          <div className="pt-5">
            <Button variant="contained">Hello world</Button>
          </div>
        </div>
      </div>
    </>
  );
}
