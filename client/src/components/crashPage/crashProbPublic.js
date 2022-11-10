import Header from "../reuse/header";
import Speedometer from "../reuse/speedometer";
import countryData from "./countrydata";
import CountryStockIndex from "./country-stock-index-map";
import CountryStockIndexSidebar from "./country-stock-index-sidebar";
import parametersData from "./parametersData";
import ParameterIndexDisplay from "./parameterIndexDisplay";
import {Link} from "react-router-dom";
import React from "react";

export default function CrashProbPublic () {

    const countryMapCards = countryData.map((country) => {
        return (
            <CountryStockIndex
                {...country}
                key={country.id}
            />
        )
    })

    const countrySideCards = countryData.map(country => {
        return (
            <CountryStockIndexSidebar
                {...country}
                key={country.id}
            />
        )
    })

    return (
        <main>
            <Header />

            <section className={"home-page"}>
                <div className={"side-info-container"}>

                    <div className={"headings"}>
                        <h2>Financial Statics</h2>
                        <h1>$1,287,572</h1>
                    </div>

                    <div className={"select-year"}>
                        <div className={"year"}>2018</div>
                        <div className={"year active-year"}>2019</div>
                        <div className={"year"}>2020</div>
                        <div className={"year"}>2021</div>
                    </div>

                    <div className={"gradient-hr"}></div>

                    <div className={"stocks-data-container"}>
                        <ul className={"stocks-list"}>
                            {countrySideCards}
                        </ul>
                    </div>

                    <div className={"threat-level"}>
                        <Speedometer
                            value={80}
                            text={40}
                            strokeWidth={8}
                        />
                    </div>

                    <div className={"opinion-container"}>
                        <Link to={"/comments"} className={"opinion"}>Share your opinion</Link>
                        <Link to={"/checkCrash"} className={"opinion"}>Custom Data</Link>
                    </div>




                </div>
                <div className={"map-container"}>
                    {countryMapCards}
                    <div className={"crash-parameters"}>
                        <ParameterIndexDisplay {...parametersData[0]} />
                        <div className={"vertical-line"}></div>
                        <ParameterIndexDisplay {...parametersData[1]} />
                        <ParameterIndexDisplay {...parametersData[2]} />
                        <ParameterIndexDisplay {...parametersData[3]} />
                    </div>
                </div>
            </section>

            {/*<section className={"mobile-home-page"}>*/}
            {/*    <div className={"threat-level"}>*/}
            {/*        <Speedometer*/}
            {/*            value={80}*/}
            {/*            text={40}*/}
            {/*            strokeWidth={8}*/}
            {/*        />*/}
            {/*    </div>*/}

            {/*    <div className={"opinion-container"}>*/}
            {/*        <link href={"/comments"} className={"opinion"}>Share your opinion</a>*/}
            {/*    </div>*/}

            {/*    <div className={"headings"}>*/}
            {/*        <h2>Financial Statics</h2>*/}
            {/*        <h1>$1,287,572</h1>*/}
            {/*    </div>*/}

            {/*    <div className={"select-year"}>*/}
            {/*        <div className={"year"}>2018</div>*/}
            {/*        <div className={"year active-year"}>2019</div>*/}
            {/*        <div className={"year"}>2020</div>*/}
            {/*        <div className={"year"}>2021</div>*/}
            {/*    </div>*/}


            {/*    <div>*/}
            {/*        <div className={"gradient-hr"}></div>*/}

            {/*        <div className={"stocks-data-container"}>*/}
            {/*            <ul className={"stocks-list"}>*/}
            {/*                {countrySideCards}*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</section>*/}

        </main>
    )
}
