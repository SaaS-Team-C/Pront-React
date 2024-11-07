import "./style.css";
import React, { useEffect, useState } from "react";
import List from "../../component/accomodation/list";
import Topbar from "src/component/topbar";
import Filter from "src/component/accomodation/filter";
import { fetchAccommodationList } from "src/apis/accommodation";
import { AccommodationDTO } from "src/apis/accommodation/dto/response/accommodation.response.dto";


const AccommodationList: React.FC = () => {
// state: 숙소 리스트 불러오기 상태 관리
const [callAccommodationList, SetCallAccommodationList] = useState<AccommodationDTO[]>([]);
  

  // effect: 숙소 리스트 불러오기 //
  useEffect(() => {
    //function: 메인(홈)에서 고객이 검색(지역, 숙박일자, 체크인, 체크아웃 시간)하여 받아온 숙소 리스트를 화면에 뿌려주는 api 호출 함수
    const getAccommodations = async () => {
      try {
        fetchAccommodationList(); //는 서버에 요청을 보내 숙소 리스트를 받아오는 함수
        const data = await fetchAccommodationList();
        SetCallAccommodationList(data);
      } catch (error) {
        console.error("Error fetching accommodation list:", error);
      }
    };
    getAccommodations();
  }, []);

  return (
    <div className="AccommodationList">
      <div className="app-container">
        <Topbar />
        <div className="content-container">
          <Filter />
          <List accommodations={[]} />
        </div>
      </div>
    </div>
  );
};

export default AccommodationList;