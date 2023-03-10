import { getJunitXml } from "junit-xml";
import fs from "fs";

const testSuiteReport = {
  name: "Some test suite report name",
  time: 4.2,
  suites: [
    {
      name: "Some suite",
      timestamp: new Date(Date.UTC(1989, 10, 3)),
      hostname: "some-hostname",
      time: 1.1337,
      testCases: [
        {
          name: "Successful test",
          assertions: 2,
          classname: "successful-test-class",
          time: 0.72,
        },
        {
          name: "Skipped test",
          assertions: 2,
          skipped: true,
        },
        {
          name: "Unskipped test",
          skipped: false,
        },
        {
          name: "Failing test",
          failures: [
            { message: "First failure", type: "some-type" },
            { message: "Second failure" },
          ],
        },
        {
          name: "Another failing test",
          failures: [{ message: "Just one failure" }],
        },
        {
          name: "Erroring test",
          errors: [
            { message: "First error", type: "some-type" },
            { message: "Second error" },
          ],
        },
        {
          name: "Another erroring test",
          errors: [{ message: "Just one error" }],
        },
        {
          name: "Test with output",
          systemOut: ["First output", "Second output"],
        },
        {
          name: "Test with single output",
          systemOut: ["Only output"],
        },
        {
          name: "Test with error output",
          systemErr: ["First error output", "Second error output"],
        },
        {
          name: "Test with single error output",
          systemErr: ["Only error output"],
        },
      ],
    },
    {
      name: "Suite without test cases",
      testCases: [],
    },
    {
      name: "Another suite",
      testCases: [{ name: "Some successful test" }],
    },
  ],
};

const junitXml = getJunitXml(testSuiteReport);
// write to a file in the current directory
fs.writeFileSync("junit.xml", junitXml);
