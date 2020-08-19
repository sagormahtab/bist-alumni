import React from 'react';
import compLogo from '../../images/compnay-logo.png';

const JobOpportunities = () => {
    return (
        <section id="job-opportunity" class="section-padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="section-title">
                    <h2>Recent Jobs</h2>
                </div>
            </div>
        </div>

        <div class="job-opportunity-wrapper">
            <div class="row">
                <div class="col-lg-4 col-sm-6 text-center">
                    <div class="single-job-opportunity">
                        <div class="job-opportunity-text">
                            <div class="job-oppor-logo">
                                <div class="display-table">
                                    <div class="display-table-cell">
                                        <img src={compLogo} alt="Job" />
                                    </div>
                                </div>
                            </div>
                            <h3><a href="/">Urgently Need Five Data Center Specialist</a></h3>
                            <p>Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus.<a href="/">[...]</a></p>
                        </div>
                        <a href="/" class="btn btn-job">Apply now</a>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 text-center">
                    <div class="single-job-opportunity">
                        <div class="job-opportunity-text">
                            <div class="job-oppor-logo">
                                <div class="display-table">
                                    <div class="display-table-cell">
                                        <img src={compLogo} alt="Job" />
                                    </div>
                                </div>
                            </div>
                            <h3><a href="/">Product Owner (m/f) for our Charter Business</a></h3>
                            <p>Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus.<a href="/">[...]</a></p>
                        </div>
                        <a href="/" class="btn btn-job">Apply now</a>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 text-center">
                    <div class="single-job-opportunity">
                        <div class="job-opportunity-text">
                            <div class="job-oppor-logo">
                                <div class="display-table">
                                    <div class="display-table-cell">
                                        <img src={compLogo} alt="Job" />
                                    </div>
                                </div>
                            </div>
                            <h3><a href="/">Backend Developer (Java) (m/f) wanted for leading</a></h3>
                            <p>Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus.<a href="/">[...]</a></p>
                        </div>
                        <a href="/" class="btn btn-job btn-expired disabled">Expired</a>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 text-center">
                    <div class="single-job-opportunity">
                        <div class="job-opportunity-text">
                            <div class="job-oppor-logo">
                                <div class="display-table">
                                    <div class="display-table-cell">
                                        <img src={compLogo} alt="Job" />
                                    </div>
                                </div>
                            </div>
                            <h3><a href="/">API Architect and Lead - Python, SQLAlchemy, GraphQL</a></h3>
                            <p>Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus.<a href="/">[...]</a></p>
                        </div>
                        <a href="/" class="btn btn-job">Apply now</a>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 text-center">
                    <div class="single-job-opportunity">
                        <div class="job-opportunity-text">
                            <div class="job-oppor-logo">
                                <div class="display-table">
                                    <div class="display-table-cell">
                                        <img src={compLogo} alt="Job" />
                                    </div>
                                </div>
                            </div>
                            <h3><a href="/">Remotely - Javascript Developer Node.js</a></h3>
                            <p>Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus.<a href="/">[...]</a></p>
                        </div>
                        <a href="/" class="btn btn-job btn-expired disabled">Expired</a>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6 text-center">
                    <div class="single-job-opportunity">
                        <div class="job-opportunity-text">
                            <div class="job-oppor-logo">
                                <div class="display-table">
                                    <div class="display-table-cell">
                                        <img src={compLogo} alt="Job" />
                                    </div>
                                </div>
                            </div>
                            <h3><a href="/">Five Years Experience Data Center Specialist Needed</a></h3>
                            <p>Claritas est etiam procsus dymicus, qui sequitur mutationem Claritas est etiam procsus est etiam procsus dymicus.<a href="/">[...]</a></p>
                        </div>
                        <a href="/" class="btn btn-job">Apply now</a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12 text-center">
                    <a href="career.html" class="btn btn-brand btn-loadmore">All job list</a>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};

export default JobOpportunities;