import "./ActivityNFT.css";
import React, { useState } from "react";
import Pagination from "../pagination/Pagination";
import ActivityArticle from "./ActivityArticle";

export default function ActivityNFT() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const timeline = [
    {
      date: "2022/11/10",
      data: [
        {
          time: "15:30",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_01.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "17:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_02.png",
          price: "0.11",
          purchase: "sale",
        },
      ],
    },
    {
      date: "2022/11/09",
      data: [
        {
          time: "15:30",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_01.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "17:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_02.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "18:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_03.png",
          price: "0.11",
          purchase: "sale",
        },
        {
          time: "19:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_04.png",
          price: "0.11",
          purchase: "buy",
        },
      ],
    },
    {
      date: "2022/11/08",
      data: [
        {
          time: "15:30",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_01.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "17:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_02.png",
          price: "0.11",
          purchase: "sale",
        },
        {
          time: "18:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_03.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "19:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_04.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "20:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_04.png",
          price: "0.11",
          purchase: "sale",
        },
      ],
    },
    {
      date: "2022/11/07",
      data: [
        {
          time: "15:30",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_01.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "17:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_02.png",
          price: "0.11",
          purchase: "sale",
        },
      ],
    },
    {
      date: "2022/11/06",
      data: [
        {
          time: "15:30",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_01.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "19:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_04.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "20:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_03.png",
          price: "0.11",
          purchase: "sale",
        },
      ],
    },
    {
      date: "2022/11/05",
      data: [
        {
          time: "15:30",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_01.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "19:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_03.png",
          price: "0.11",
          purchase: "sale",
        },
        {
          time: "20:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_04.png",
          price: "0.11",
          purchase: "buy",
        },
      ],
    },
    {
      date: "2022/11/04",
      data: [
        {
          time: "15:30",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_01.png",
          price: "0.11",
          purchase: "sale",
        },
        {
          time: "19:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_02.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "20:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_04.png",
          price: "0.11",
          purchase: "buy",
        },
      ],
    },
    {
      date: "2022/11/03",
      data: [
        {
          time: "15:30",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_01.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "19:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_04.png",
          price: "0.11",
          purchase: "sale",
        },
        {
          time: "20:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_02.png",
          price: "0.11",
          purchase: "buy",
        },
      ],
    },
    {
      date: "2022/11/02",
      data: [
        {
          time: "15:30",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_01.png",
          price: "0.11",
          purchase: "sale",
        },
        {
          time: "19:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_03.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "20:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_04.png",
          price: "0.11",
          purchase: "sale",
        },
      ],
    },
    {
      date: "2022/11/01",
      data: [
        {
          time: "15:30",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_01.png",
          price: "0.11",
          purchase: "buy",
        },
        {
          time: "19:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_04.png",
          price: "0.11",
          purchase: "sale",
        },
        {
          time: "20:04",
          id: "0x5d312313141232121ddc28",
          itemID: "#1154",
          avatar: "/images/avatar/avatar_03.png",
          price: "0.11",
          purchase: "buy",
        },
      ],
    },
  ];

  console.log(`타임라인 총 길이 : ${timeline.length}`);
  return (
    <div className="main_card_section">
      <div className="activity_section">
        <span className="activity_title">Activity</span>
        <article className="activity_article">
          {timeline.map((res) => (
            <ActivityArticle date={res.date} data={res.data} />
          ))}
        </article>
        {/* {content} */}
      </div>
      <div className="pagination_section">
        <Pagination
          total={timeline.length !== 0 ? timeline.length : 0}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
