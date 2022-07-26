import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import './Lawyers.scss';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import Button from "../../../../Components/Button/Button";
import Loader from '../../../../util/loader'

interface ILawyers {
    id: number,
    name: string,
    email: string,
    nic: string,
    phoneNumber?: string
    isVerified: boolean
}

const Lawyer = () => {
    const [getLawyerData, setGetLawyerData] = useState<ILawyers[]>([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        const products = [
            {
                id: 1,
                name: 'hamza',
                email: "hamza@gmail.com",
                nic: '4210100101',
                isVerified: false
            },
            {
                id: 2,
                name: 'hamza',
                email: "hamza@gmail.com",
                nic: '42424242',
                isVerified: true
            },
        ]

        setGetLawyerData(products)
    }, [])

    const paginationOption = {
        custom: true,
        totalSize: getLawyerData.length
    };

    const columns = [
        {
            dataField: 'id',
            text: 'Lawyer ID',
            hidden: true,
        },
        {
            dataField: 'name',
            text: 'Name'
        },
        {
            dataField: 'email',
            text: 'Email'
        },
        {
            dataField: 'nic',
            text: 'nic'
        },
        {
            dataField: 'isVerified',
            text: 'isVerified'
        },
        {
            dataField: 'view',
            text: 'View',
            formatter: (cellContent: string) => {
                return <Button type='button'> View </Button>
            },
        },
        {
            dataField: 'delete Lawyer',
            text: 'Action',
            formatter: (cellContent: string) => {
                return <Button type='button'> Delete </Button>
            },
        }
    ];

    return (
        <div className={'page_responsive'}>
            <h1>Lawyers</h1>
            <div className={'mt-5'}>
                {loading ? <Loader /> :
                    <PaginationProvider
                        pagination={paginationFactory(paginationOption)}
                    >
                        {
                            (props: any) => (
                                <div>
                                    <BootstrapTable keyField='id' data={getLawyerData} columns={columns} {...props.paginationTableProps} />
                                </div>
                            )
                        }
                    </PaginationProvider>
                }
            </div>
        </div>
    );
};

export default Lawyer;
