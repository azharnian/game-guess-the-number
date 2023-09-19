import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import React from 'react';


export default function TopicsPage(){

    const [videos, setVideos] = useState([]);
    const [error, setError] = useState('');

    // const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    // const searchQuery = "Linear VS Binary Search Algorithm";

    // useEffect(() => {
    //     const fetchYoutubeData = async () => {
    //         try {
    //             const response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&part=snippet&maxResults=10&key=${apiKey}`);

    //             if (!response.ok) {
    //                 throw new Error("Network response was not ok")
    //             }
    //             const data = await response.json();
    //             setVideos(data.items);

    //         } catch (err) {
    //             setError(err);
    //         } 
    //     }
    //     fetchYoutubeData();
    // }, [apiKey, searchQuery])

    useEffect(() => {
        // Fetch the JSON data
        fetch('/data.json') 
          .then((response) => response.json())
          .then((jsonData) => {
            setVideos(jsonData.items); 
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setError(error);
          });
    },[]);

    if (error) {
        return <>Error: {error.message}</>;
      }

    return (
        <section className="container">
            <h1>Topics</h1>
                <section className="sub-container">
                  <h2>⭐️ Learning Objectives ⭐️</h2>
                  <p>
                  Perserta didik mampu mengaplikasikan berbagai algoritma pencarian. (Informatika Kelas 10 - (BK) Berpikir Komputasional - Fase E)
                  </p>
                </section>

                <section className="sub-container">
                  <h2>References from Wikipedia</h2>

                  <ul>
                    <li>
                      <Link to={"https://id.wikipedia.org/wiki/Pencarian_linear"} target="_blank">Algoritma Linear Search</Link>
                    </li>
                    <li>
                      <Link to={"https://en.wikipedia.org/wiki/Binary_search_algorithm"} target="_blank">Algoritma Binary Search</Link>
                    </li>
                  </ul>
                </section>

                <section className="sub-container">

                <h2>References Youtube Video</h2>
                {videos.map((video) => (
                    <div className="topic-item" key={video.id.videoId}>
                        <a
                        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {video.snippet.title.slice(0, 50)}
                        </a>
                        <img
                            src={video.snippet.thumbnails.medium.url} // Use the 'medium' thumbnail
                            alt={video.snippet.title}
                        />
                    </div>
                ))}
                </section>
                
        </section>
    )
}