import React from 'react';

export const Github = () => (
    <section className="github section">
        <div className="section-inner">
            <h2 className="heading">My GitHub</h2>
            <p>You can embed your GitHub contribution graph calendar using IonicaBizau's <a
                href="https://github.com/IonicaBizau/github-calendar" target="_blank">GitHub Calendar</a> widget.

                <div id="github-graph" className="github-graph">

                </div>

                <p>You can also embed your GitHub activities using Casey Scarborough's <a
                    href="http://caseyscarborough.com/projects/github-activity/" target="_blank">GitHub Activity
                    Stream</a> widget.
                </p>
                <div id="ghfeed" className="ghfeed">

                </div>
            </p>
        </div>
    </section>
);

export default Github;