import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Calendar from "../components/react-google-calendar";

interface Props {
    key: any,
    window?: () => Window;
}

class CalendarApp extends React.Component {
    render() {
        let calendars = [
            {
                calendarId: "bg4e1frm2kqlieki1q1tr5j1kg@group.calendar.google.com",
                color: "#B241D1"
            }
        ];
        return (
            <div>
                <Calendar calendars={calendars} />
                <iframe src={"https://calendar.google.com/calendar/embed?src=bg4e1frm2kqlieki1q1tr5j1kg%40group.calendar.google.com&ctz=America%2FChicago"} style={{width: '100%', height: '100vh'}}/>
            </div>
        )
    }
}

export default function CalendarPage(props: Props) {
    return (
        <Layout maxWidth={1080}>
            <div style={{margin: '10px'}}>
                <Head>
                    <title>ECEA: Calendar</title>
                </Head>
                <CalendarApp/>
            </div>
        </Layout>
    )
}

