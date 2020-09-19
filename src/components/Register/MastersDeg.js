import React from "react";

const MastersDeg = () => {
  return (
    <div>
      <div class="form-group form-select">
        <label for="mastersacdyr">Master's Degree Academic Year</label>
        <select
          name="mastersacdyr"
          id="mastersacdyr"
          className="form-control innocent-select"
        >
          <option value="" disabled selected>
            Select Your Master's Degree Academic Year
          </option>
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
          <option value="2017-2018">2017-2018</option>
          <option value="2018-2019">2018-2019</option>
          <option value="2019-2020">2019-2020</option>
          <option value="2020-2021">2020-2021</option>
          <option value="2021-2022">2021-2022</option>
          <option value="2022-2023">2022-2023</option>
          <option value="2023-2024">2023-2024</option>
        </select>
      </div>

      <div class="form-group form-select">
        <label for="masterspassingyr">Master's Degree Passing Year</label>
        <select
          name="masterspassingyr"
          id="masterspassingyr"
          className="form-control innocent-select"
        >
          <option value="" disabled selected>
            Select Your Master's Degree Passing Year
          </option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>

      <div class="form-group">
        <label className="mr-3" for="upload-photo">
          Upload Picture(Max 500kb)
        </label>
        <input type="file" name="register_file" id="upload-photo" />
      </div>

      <p className="comp-text">
        Please compress your image from here.{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://compressjpeg.com/"
        >
          Click Here
        </a>
      </p>
    </div>
  );
};

export default MastersDeg;
