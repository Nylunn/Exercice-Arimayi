import { Header } from "antd/es/layout/layout";
import React from "react";
import { RadarChartOutlined } from "@ant-design/icons"
import { Avatar } from "antd";



function AppHeader() {
    return <Header className="!bg-white border-b border-[#f1f1f1] flex items-center justify-between">
        <div className="flex items-center gap-2">
            <RadarChartOutlined className="text-3xl"/>
            <div>AriMayi</div>
        </div>
        <div className="flex items-center gap-2">
            <Avatar size={40} src="/logo.png" />
            <div style={{fontSize:25}}>John Doe</div>
        </div>
    </Header> ;
}
export default AppHeader;