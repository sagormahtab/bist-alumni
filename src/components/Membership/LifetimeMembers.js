import React from "react";
import DataTable from "./DataTable";

const LifetimeMembers = () => {
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
                <a
                  href="#page-content-wrap"
                  class="btn btn-brand smooth-scroll"
                >
                  Let's See
                </a>
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
                    Now we have <strong class="funfact-count">485274</strong>{" "}
                    member{" "}
                  </h2>
                  <div class="table-search-area">
                    <form action="index.html">
                      <select name="session" className="mr-4">
                        <option value="" selected disabled>
                          Session
                        </option>
                        <option value="2000-2001">1999-2000</option>
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

                      <select name="dept">
                        <option value="" disabled selected>
                          Dept
                        </option>
                        <option value="CSE">CSE</option>
                        <option value="BBA">BBA</option>
                        <option value="EEE">EEE</option>
                        <option value="Diploma">Diploma</option>
                      </select>
                      <button class="btn btn-brand">Search</button>
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
