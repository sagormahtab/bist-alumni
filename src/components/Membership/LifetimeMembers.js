import React from "react";
import Select from "react-select";
import DataTable from "./DataTable";
import { useCountUp } from "react-countup";

const sessionOptions = [
  { value: "1999-2000", label: "1999-2000" },
  { value: "2000-2001", label: "2000-2001" },
  { value: "2001-2002", label: "2001-2002" },
  { value: "2002-2003", label: "2002-2003" },
  { value: "2003-2004", label: "2003-2004" },
  { value: "2004-2005", label: "2004-2005" },
  { value: "2005-2006", label: "2005-2006" },
  { value: "2006-2007", label: "2006-2007" },
  { value: "2007-2008", label: "2007-2008" },
  { value: "2008-2009", label: "2008-2009" },
  { value: "2009-2010", label: "2009-2010" },
  { value: "2010-2011", label: "2010-2011" },
  { value: "2011-2012", label: "2011-2012" },
  { value: "2012-2013", label: "2012-2013" },
  { value: "2013-2014", label: "2013-2014" },
  { value: "2014-2015", label: "2014-2015" },
  { value: "2015-2016", label: "2015-2016" },
  { value: "2016-2017", label: "2016-2017" },
];
const deptOptions = [
  { value: "CSE", label: "CSE" },
  { value: "BBA", label: "BBA" },
  { value: "EEE", label: "EEE" },
  { value: "Diploma", label: "Diploma" },
];

const LifetimeMembers = () => {
  const { countUp } = useCountUp({
    end: 485274,
    duration: 1,
    useEasing: false,
  });
  return (
    <div>
      <section id="page-title-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <div class="page-title-content">
                <h1 class="h2">Life-time Members List</h1>
                <p>
                  Alumni Needs enables you to harness the power of your alumni
                  network. Whatever may be the need
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="page-content-wrap">
        <div class="directory-page-content-warp section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <div class="directory-text-wrap">
                  <h2>
                    Now we have{" "}
                    <strong class="funfact-count lifetime-count-33">
                      {countUp}
                    </strong>{" "}
                    member{" "}
                  </h2>
                  <div class="table-search-area">
                    <form action="index.html">
                      <div className="d-flex justify-content-center flex-wrap">
                        <Select
                          options={sessionOptions}
                          placeholder="Session"
                          isSearchable={false}
                          className="lftm-container"
                          classNamePrefix="lftm"
                        />

                        <Select
                          options={deptOptions}
                          placeholder="Dept"
                          isSearchable={false}
                          className="lftm-container"
                          classNamePrefix="lftm"
                        />
                        <button class="btn mem-srch-btn btn-brand">
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="directory-table table-responsive">
                  <DataTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifetimeMembers;
