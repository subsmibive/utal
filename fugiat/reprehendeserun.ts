import * as jsonpatch from 'fast-json-patch';

// Example JSON object
let document = {
  firstName: "John",
  lastName: "Doe"
};

// Example JSON patch
let patch: jsonpatch.Operation[] = [
  { op: "replace", path: "/firstName", value: "Jane" },
  { op: "remove", path: "/lastName" }
];

try {
  jsonpatch.applyPatch(document, patch);
} catch (e) {
  if (e instanceof jsonpatch.JsonPatchError) {
    console.error("An error occurred while applying the JSON Patch:", e.message);
  } else {
    console.error("An unexpected error occurred:", e);
  }
}

console.log(document);
