import React, { useEffect, useState } from "react";
import "./Logs.scss";

interface LogsType {
  movie_research: string;
  timestamp: string;
  user: string;
}

const Logs: React.FC = () => {
  const [logs, setLogs] = useState<LogsType[]>([]);

  useEffect(() => {
    const getLogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/logs");
        const data = await response.json();

        console.log()

        setLogs(data);
      } catch (error) {
        console.error("Error fetching logs:", error);
        alert("Error fetching logs");
      }
    };
    getLogs();
  }, []);

  return (
    <div className="logs-list">
      <h2 className="title">Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <div>{log.user} </div>
            <div>{log.movie_research}</div>
            <div>{log.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
