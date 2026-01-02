const core = require("@actions/core");
const github = require("@actions/github");

function test() {
  core.notice("This is just a console testing");
  const testInput1 = core.getInput("test_input_1");
  const testInput2 = core.getInput("test_input_2");
  const testInput3 = core.getInput("test_input_3");

  core.notice(`All inputs: ${testInput1} ${testInput2} ${testInput3}`);

  const output_001 =
    "Outputs==" + "1." + testInput1 + "2." + testInput2 + "3." + testInput3;
  core.setOutput("output_test", output_001);
}
test();
