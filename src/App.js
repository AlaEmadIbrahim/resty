import React, {useState} from 'react';
import './app.scss';
import Footer from './components/footer/index';
import Form from './components/form/index';
import Results from './components/results/index';
import Header from "./components/header/index";

function App() {

    const [data,
        setData] = useState({data: null, requestParams: {}})

    const [result,
        setResult] = useState()

    function callApi(requestParams) {
        const data = {
            count: 2,
            results: [
                {
                    name: 'fake thing 1',
                    url: 'http://fakethings.com/1'
                }, {
                    name: 'fake thing 2',
                    url: 'http://fakethings.com/2'
                }
            ]
        };
        setData({
            ...data,
            data,
            requestParams
        })
    }
    return (
        <React.Fragment>
            <Header/>
            <Form handleApiCall={callApi} setResult={setResult}/>
            <div id='body'>
                <div id={result?'method':null}>
                    <div>{data.requestParams.method}</div>
                    <div>{data.requestParams.url}</div>
                </div>
                <Results result={result}/>
            </div>
            <Footer/>
        </React.Fragment>
    );

}

export default App;