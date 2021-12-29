
import Meta from "../components/Meta"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from "next/link";
import Image from "next/image";


const dataVisualisation = () =>  {
    return (
        <>
          <Meta title={"Portfolio"}/>
          <div className="container mt-3" id="middlecontent">
            <h2>Data Visualisation</h2> 
            <div className="mt-2">
                <Tabs>
                    <TabList>
                    <Tab>D3 js</Tab>
                    <Tab>Dash Plotly</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="mx-2">
                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6"   >
                                            <Image src="/portfolio/periodictable.jpg" width="500" height="280"></Image>
                                        </div>
                                        <div className="col-md-6 mt-2" >
                                        <div className="h5">Periodic Table</div>
                                        <p className="category">Periodic Table created with help of D3 js. Selecting any element will heighlight all elements in that group. Also opens up a information windows related to selected element.</p>
                                        <Link href="https://krajiv26-periodic-table.herokuapp.com/">
                                            <a target="_blank">Online link</a>
                                        </Link>
                                        <div className="notes mt-2">Notes: It may take few minutes to intiate this app online.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6"   >
                                            <Image src="/portfolio/moon_mission.jpg" width="500" height="280"></Image>
                                        </div>
                                        <div className="col-md-6 mt-2" >
                                        <div className="h5">Lunar Mission</div>
                                        <p className="category">Showing all moon/lunar mission by various country around the world with time line in D3 js</p>
                                        <Link href="https://bl.ocks.org/krajiv26/96ccc448f176965ccc2c2e7dbf738b16">
                                            <a target="_blank">Online link</a>
                                        </Link>
                                        <div className="notes mt-2">Notes: It may take few minutes to intiate this app online.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6"   >
                                            <Image src="/portfolio/covidtimeline.jpg" width="500" height="280"></Image>
                                        </div>
                                        <div className="col-md-6 mt-2" >
                                        <div className="h5">Covid Timeline</div>
                                        <p className="category">Showing World Covid timeline with play facility in D3 js</p>
                                        <Link href="https://bl.ocks.org/krajiv26/1085d448cdb2e1b13670d3fb94b8b2be">
                                            <a target="_blank">Online link</a>
                                        </Link>
                                        <div className="notes mt-2">Notes: It may take few minutes to intiate this app online.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6"   >
                                            <Image src="/portfolio/confusion.jpg" width="500" height="280"></Image>
                                        </div>
                                        <div className="col-md-6 mt-2" >
                                        <div className="h5">Confusion matrix</div>
                                        <p className="category">Showing Confusion Matrix used in Data Science with D3 js</p>
                                        <Link href="https://bl.ocks.org/krajiv26/f12fcb0999032e2df1a4dca28ec58a6e">
                                            <a target="_blank">Online link</a>
                                        </Link>
                                        <div className="notes mt-2">Notes: It may take few minutes to intiate this app online.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6"   >
                                            <Image src="/portfolio/floatingbarchart.jpg" width="500" height="280"></Image>
                                        </div>
                                        <div className="col-md-6 mt-2" >
                                        <div className="h5">Floating Bar Chart</div>
                                        <p className="category">Showing Floating Bar Chart - Temperature across year monthwise in D3 js</p>
                                        <Link href="https://bl.ocks.org/krajiv26/c35a669e87b51e5aea8ed2421e663bc7">
                                            <a target="_blank">Online link</a>
                                        </Link>
                                        <div className="notes mt-2">Notes: It may take few minutes to intiate this app online.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6"   >
                                            <Image src="/portfolio/groupmatrix.jpg" width="500" height="280"></Image>
                                        </div>
                                        <div className="col-md-6 mt-2" >
                                        <div className="h5">Group Matrix Graph</div>
                                        <p className="category">Showing Group matrix graph in D3 js</p>
                                        <Link href="https://bl.ocks.org/krajiv26/357805280e4111adacdcc5e2065316d1">
                                            <a target="_blank">Online link</a>
                                        </Link>
                                        <div className="notes mt-2">Notes: It may take few minutes to intiate this app online.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6"   >
                                            <Image src="/portfolio/gnatt.jpg" width="500" height="280"></Image>
                                        </div>
                                        <div className="col-md-6 mt-2" >
                                        <div className="h5">Gantt Chart</div>
                                        <p className="category">Showing Gantt Chart to display task completion status in D3 js</p>
                                        <Link href="https://bl.ocks.org/krajiv26/712ca714cc6644292ae893c25328acbc">
                                            <a target="_blank">Online link</a>
                                        </Link>
                                        <div className="notes mt-2">Notes: It may take few minutes to intiate this app online.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6"   >
                                            <Image src="/portfolio/treemap.jpg" width="500" height="280"></Image>
                                        </div>
                                        <div className="col-md-6 mt-2" >
                                        <div className="h5">Zoomable TreeMap</div>
                                        <p className="category">Showing zoomable treemap in D3 js</p>
                                        <Link href="https://bl.ocks.org/krajiv26/337727e9798b98b45ebfbb0612cef566">
                                            <a target="_blank">Online link</a>
                                        </Link>
                                        <div className="notes mt-2">Notes: It may take few minutes to intiate this app online.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="mx-2">
                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6"   >
                                            <Image src="/portfolio/india_demography.jpg" width="500" height="280"></Image>
                                        </div>
                                        <div className="col-md-6 mt-2" >
                                        <div className="h5">India Demography</div>
                                        <p className="category">Showing India Poulation Density and Sex Ratio on the map of India. Also showing data table for data.</p>
                                        <Link href="https://krajiv26-indian-demography.herokuapp.com/">
                                            <a target="_blank">Online link</a>
                                        </Link>
                                        <div className="notes mt-2">Notes: It may take few minutes to intiate this app online.</div>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <div className="extra-footer"></div>

          </div>
         
        </>
    )
}

export default dataVisualisation