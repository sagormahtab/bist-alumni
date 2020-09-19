import React from "react";

const EduQualific = () => {
  return (
    <div>
      <div class="form-group form-select">
        <label for="chooseacdyear">Honours Academic Year</label>
        <select
          name="chooseacdyear"
          id="chooseacdyear"
          className="form-control innocent-select"
        >
          <option value="" disabled selected>
            Select Your Honours Academic Year
          </option>
          <option value="1999-2003">1999-2003</option>
          <option value="2000-2004">2000-2004</option>
          <option value="2001-2005">2001-2005</option>
          <option value="2002-2006">2002-2006</option>
          <option value="2003-2007">2003-2007</option>
          <option value="2004-2008">2004-2008</option>
          <option value="2005-2009">2005-2009</option>
          <option value="2006-2010">2006-2010</option>
          <option value="2007-2011">2007-2011</option>
          <option value="2008-2012">2008-2012</option>
          <option value="2009-2013">2009-2013</option>
          <option value="2010-2014">2010-2014</option>
          <option value="2011-2015">2011-2015</option>
          <option value="2012-2016">2012-2016</option>
          <option value="2013-2017">2013-2017</option>
          <option value="2014-2018">2014-2018</option>
          <option value="2015-2019">2015-2019</option>
          <option value="2016-2020">2016-2020</option>
          <option value="2017-2021">2017-2021</option>
        </select>
      </div>
      <div class="form-group form-select">
        <label for="honspassingyr">Honors Passing Year</label>
        <select
          name="honspassingyr"
          id="honspassingyr"
          className="form-control innocent-select"
        >
          <option value="" disabled selected>
            Select Your Honors Passing Year
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
        </select>
      </div>
    </div>
  );
};

export default EduQualific;
