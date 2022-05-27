import React from 'react';
const fetcher = require("./fetcher").default;
import './index.css';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};


const MakeStudentTable = (props) => {

    const { items, requestSort, sortConfig } = useSortableData(JSON.parse(props.data));

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    let table = 
        <table>
            <caption>Student</caption>
            <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('_id')}
                            className={getClassNamesFor('_id')}
                        > Student ID </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className={getClassNamesFor('name')}
                        > Student Name </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('email')}
                            className={getClassNamesFor('email')}
                        > Student Email </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('signUpDate')}
                            className={getClassNamesFor('signUpDate')}
                        > Student Sign Up Date </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.signUpDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>;
    return table;
};

const MakeCourseTable = (props) => {

    const { items, requestSort, sortConfig } = useSortableData(JSON.parse(props.data));
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    let table = 
        <table>
            <caption>Course</caption>
            <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('course_code')}
                            className={getClassNamesFor('course_code')}
                        > Course Code </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('course_name')}
                            className={getClassNamesFor('course_name')}
                        > Course Name </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('course_description')}
                            className={getClassNamesFor('course_description')}
                        > Course Description </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.course_code}>
                        <td>{item.course_code}</td>
                        <td>{item.course_name}</td>
                        <td>{item.course_description}</td>
                    </tr>
                ))}
            </tbody>
        </table>;
    return table;
};


const MakeRegistrationTable = (props) => {

    const { items, requestSort, sortConfig } = useSortableData(JSON.parse(props.data));
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    let table = 
        <table>
            <caption>Registration</caption>
            <thead>
                <tr>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('student_id')}
                            className={getClassNamesFor('student_id')}
                        > Student ID </button>
                    </th>
                    <th>
                        <button
                            type="button"
                            onClick={() => requestSort('course_code')}
                            className={getClassNamesFor('course_code')}
                        > Course Code </button>
                    </th>
                    {/* <th>
                        <button
                            type="button"
                            onClick={() => requestSort('unix_timestamp')}
                            className={getClassNamesFor('unix_timestamp')}
                        > Student Sign Up Time and Date </button>
                    </th> */}
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.student_id}>
                        <td>{item.student_id}</td>
                        <td>{item.course_code}</td>
                        {/* <td>{item.unix_timestamp}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>;
    return table;
};

export default function App() {
    fetcher('students')
    fetcher('courses')
    fetcher('registrations')
    return (
        <div className="App">

            {/* <MakeStudentTable
                data = {localStorage.getItem('students')}
            />
            <MakeCourseTable
                data = {localStorage.getItem('courses')}
            /> */}
            <MakeRegistrationTable
                data = {localStorage.getItem('registrations')}
            />

        </div>
    );
}
