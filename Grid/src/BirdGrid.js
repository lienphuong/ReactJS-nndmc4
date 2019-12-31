// code adopted from https://adazzle.github.io/react-data-grid/
import React from 'react'
import ReactDataGrid from 'react-data-grid'
import {createRowData, createBirdRowData} from "./createRowData"

const isBirdApp = true

const defaultColumnProperties = {
    width: 160
}

const columns = [
    {key: "id", name: "ID"},
    {key: "firstName", name: "First Name"},
    {key: "lastName", name: "Last Name"},
    {key: "jobTitle", name: "Job Title"},
    {key: "jobArea", name: "Job Area"},
    {key: "jobType", name: "Job Type"},
    {key: "email", name: "Email"},
    {key: "street", name: "Street"},
    {key: "zipCode", name: "ZipCode"},
    {key: "date", name: "Date"},
    {key: "catchPhrase", name: "Catch Phrase"}
].map(c => ({...c, ...defaultColumnProperties}))

const ROW_HEIGHT = 200;
const ROW_COUNT = isBirdApp ? 5 : 50;

const rows = isBirdApp ? createBirdRowData(ROW_COUNT) : createRowData(ROW_COUNT)

const Panel = ({title, children}) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">{title}</div>
            <div className="panel-body">{children}</div>
        </div>
    )
}

const Contact = ({firstName, lastName, companyName, jobTitle, email, phone}) => {
    return (
        <div style={{ paddingLeft: "150px" }}>
            <address>
                <strong>{firstName} {lastName}</strong><br/><br/>
                <i>{jobTitle}</i><br/>
                {companyName}<br/>
                <abbr title="Phone">P:</abbr> {phone}<br/>
                <a href="mailto:#">{email}</a>
            </address>
        </div>
    );
};

const RowRenderer = ({row, idx}) => {
    return (
        <Panel title={`#${idx + 1}`}>
            <img src={row.avatar} className="pull-left Bird-img" alt=""/>
            <Contact {...row} />
        </Panel>
    );
};

function BirdGrid() {
    return (
        <div>
            <ReactDataGrid
                columns={columns}
                rowGetter={i => rows[i]}
                rowsCount={ROW_COUNT}
                minHeight={650}
                rowHeight={ROW_HEIGHT}
                headerRowHeight={1}
                enableCellAutoFocus={false}
                rowRenderer={RowRenderer}
            />
        </div>
    )
}

export default BirdGrid
