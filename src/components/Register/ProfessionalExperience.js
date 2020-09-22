import React from "react";

const ProfessionalExperience = () => {
  return (
    <div>
      <div class="form-group">
        <label for="comp_name">Company/Organization Name</label>
        <input
          type="text"
          class="form-control"
          id="comp_name"
          name="comp_name"
        />
      </div>

      <div class="form-group">
        <label for="mem_occupation">Occupation</label>
        <input
          type="text"
          class="form-control"
          id="mem_occupation"
          name="mem_occupation"
        />
      </div>

      <div class="form-group">
        <label for="mem_designation">Designation</label>
        <input
          type="text"
          class="form-control"
          id="mem_designation"
          name="mem_designation"
        />
      </div>
    </div>
  );
};

export default ProfessionalExperience;
