import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import axios from 'axios'; // Import Axios here

export default function Home() {
        const [url, setUrl] = useState('');
        const [error, setError] = useState(null);

        const handleUrlChange = (e) => {
                setUrl(e.target.value);
        };

        const generateUrlId = async () => {
                const post_array = [];
                post_array.push({
                        "target": "dataforseo.com",
                        "max_crawl_pages": 10,
                        "load_resources": true,
                        "enable_javascript": true,
                        "custom_js": "meta = {}; meta.url = document.URL; meta;",
                        "tag": "some_string_123",
                        "pingback_url": "https://www.youtube.com/"
                });

                try {
                        const response = await axios({
                                method: 'post',
                                url: 'https://api.dataforseo.com/v3/on_page/task_post',
                                auth: {
                                        username: 'urvashikshatriya9@gmail.com',
                                        password: '22cd312c7a13eb93'
                                },
                                data: post_array,
                                headers: {
                                        'content-type': 'application/json'
                                }
                        });

                        const result = response.data.tasks;
                        if (result && result.length > 0) {
                                const id = result[0].id;
                                console.log(id);
                                return id;
                        } else {
                                setError('No ID found in the response.');
                                return null;
                        }
                } catch (error) {
                        console.error('Error generating URL ID:', error);
                        setError('Error generating URL ID. Please try again.');
                        return null;
                }
        };

        const handleAuditClick = async () => {
                const generatedUrlId = await generateUrlId();
                if (generatedUrlId) {
                        axios({
                                method: 'post',
                                url: 'https://api.dataforseo.com/v3/on_page/pages',
                                auth: {
                                        username: 'urvashikshatriya9@gmail.com',
                                        password: '22cd312c7a13eb93'
                                },
                                data: [
                                        {
                                                id: generatedUrlId,
                                                page_url: url 
                                        }
                                ],
                                headers: {
                                        'content-type': 'application/json'
                                }
                        })
                                .then(function (response) {
                                        console.log("I am working correctly");
                                        console.log(response.data);

                                        const result = response?.data?.tasks[0].result[0];
                                        console.log(result);
                                        console.log("I am still  working correctly");
                                        if (result) {
                                                // Update your UI to display the result metrics.
                                                console.log(result);
                                        } else {
                                                console.error('No result found in the API response.');
                                        }
                                        console.log("I am still  working correctly part2");
                                })
                                .catch(function (error) {
                                        console.log(error);
                                });
                } else {
                        // Handle the case where generating the URL ID failed
                        console.error('Failed to generate URL ID. Cannot make API call.');
                }
        };


        return (
                <>
                        <div>
                                <h1 className='text-center'>Get A Free SEO Report!</h1>
                                <div className="container my-3">
                                        <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Enter Your URL Here:</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder='http://example.com' aria-describedby="emailHelp" value={url} onChange={handleUrlChange} />
                                        </div>
                                        <Link to='/other'>
                                                <button className="btn btn-primary" onClick={handleAuditClick}>Get a free SEO Audit Report</button>
                                        </Link>
                                        {error && <div className="alert alert-danger mt-3">{error}</div>}
                                </div>
                        </div>
                </>
        );
}
