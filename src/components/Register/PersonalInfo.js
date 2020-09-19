import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <div class="form-group form-select">
        <label for="chooseSession">Session</label>
        <select
          name="chooseSession"
          id="chooseSession"
          className="form-control innocent-select"
        >
          <option value="1999-2000" selected>
            1999-2000
          </option>
          <option value="2000-2001">2000-2001</option>
          <option value="2001-2002">2001-2002</option>
          <option value="2002-2003">2002-2003</option>
          <option value="2003-2004">2003-2004</option>
          <option value="2004-2005">2004-2005</option>
          <option value="2005-2006">2005-2006</option>
          <option value="2006-2007">2006-2007</option>
          <option value="2007-2008">2007-2008</option>
          <option value="2008-2009">2008-2009</option>
          <option value="2009-2010">2009-2010</option>
          <option value="2010-2011">2010-2011</option>
          <option value="2011-2012">2011-2012</option>
          <option value="2012-2013">2012-2013</option>
          <option value="2013-2014">2013-2014</option>
          <option value="2014-2015">2014-2015</option>
          <option value="2015-2016">2015-2016</option>
          <option value="2016-2017">2016-2017</option>
        </select>
      </div>

      <div class="form-group">
        <label for="member_name">Name</label>
        <input
          type="text"
          class="form-control"
          id="member_name"
          name="member_name"
        />
      </div>

      <div class="form-group">
        <label for="mem_birthday">Birthday</label>
        <input
          type="date"
          class="form-control"
          id="mem_birthday"
          name="mem_birthday"
        />
      </div>

      <div class="form-group form-select">
        <label for="mem_blood_group">Blood Group</label>
        <select
          name="mem_blood_group"
          id="mem_blood_group"
          className="form-control innocent-select"
        >
          <option value="" disabled selected>
            Select Your Blood Group
          </option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>

      <div class="form-group form-select">
        <label for="mem_dept">Department</label>
        <select
          name="mem_dept"
          id="mem_dept"
          className="form-control innocent-select"
        >
          <option value="" disabled selected>
            Select Your Department
          </option>
          <option value="CSE">CSE</option>
          <option value="BBA">BBA</option>
          <option value="EEE">EEE</option>
          <option value="Diploma">Diploma</option>
        </select>
      </div>

      <div class="form-group">
        <label for="fathers_name">Father's Name</label>
        <input
          type="text"
          class="form-control"
          id="fathers_name"
          name="fathers_name"
        />
      </div>

      <div class="form-group">
        <label for="mothers_name">Mather's Name</label>
        <input
          type="text"
          class="form-control"
          id="mothers_name"
          name="mothers_name"
        />
      </div>

      <div class="form-group">
        <label for="consort_name">Husband/Wife's Name (Optional)</label>
        <input
          type="text"
          class="form-control"
          id="consort_name"
          name="consort_name"
        />
      </div>

      <div class="form-group">
        <label for="permanant_address">Permanant Address</label>
        <input
          type="text"
          class="form-control"
          id="permanant_address"
          name="permanant_address"
        />
      </div>

      <div class="form-group">
        <label for="present_address">Present Address</label>
        <input
          type="text"
          class="form-control"
          id="present_address"
          name="present_address"
        />
      </div>

      <div class="form-group">
        <label for="email_address">Email</label>
        <input
          type="email"
          class="form-control"
          id="email_address"
          name="email_address"
        />
      </div>

      <div class="form-group">
        <label for="mem_mobile">Mobile</label>
        <input
          type="text"
          class="form-control"
          id="mem_mobile"
          name="mem_mobile"
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

export default PersonalInfo;
