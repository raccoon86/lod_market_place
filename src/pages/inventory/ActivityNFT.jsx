import "./ActivityNFT.css";
import React, { useState } from "react";
import Pagination from "../pagination/Pagination";
import ActivityArticle from "./ActivityArticle";
import { TimelineData } from "../../data/Timeline";

export default function ActivityNFT({ isConnect }) {
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div className="main_card_section">
      <div className="activity_section">
        {isConnect && <span className="activity_title">Activity</span>}

        <article
          className="activity_article"
          id={
            (isConnect === true && TimelineData.length === 0 && "empty") ||
            (TimelineData.length === 0 && "empty") ||
            (isConnect === false && "empty")
          }
        >
          {isConnect === false && TimelineData.length === 0 && (
            <div className="empty_list_text">NO ITMES TO DISPLAY</div>
          )}
          {isConnect === true && TimelineData.length === 0 && (
            <div className="empty_list_text">NO ITMES TO DISPLAY</div>
          )}
          {isConnect === false && (
            <div className="empty_list_text">PLEASE CONNECT WALLET</div>
          )}
          {isConnect === true &&
            TimelineData.length !== 0 &&
            TimelineData.slice(offset, offset + limit).map((res) => (
              <ActivityArticle date={res.date} data={res.data} />
            ))}
        </article>
        {/* {content} */}
      </div>
      <div className="pagination_section">
        <Pagination
          total={
            TimelineData.length !== 0 && isConnect ? TimelineData.length : 1
          }
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
