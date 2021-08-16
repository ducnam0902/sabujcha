import React, { FC } from 'react'
type paginationProps = {
    total?: number,
    pageSize?: number,
    pageIndex?: number,
    onChangePage?: Function
}
const Pagination: FC<paginationProps> = ({ total, pageIndex, pageSize, onChangePage }) => {

    return (
        <div className="pagination-wrapper">
            <div className="pagination">
                <div className="pagination-prev disabled">
                    <i className="ti ti-angle-left pagination-prev-icon"></i>
                    <span className="pagination-prev-span">Prev</span>
                </div>
                <div className="pagination-item active">1</div>
                <div className="pagination-item">2</div>

                <div className="pagination-next">
                    <span className="pagination-next-span">Next</span>
                    <i className="ti ti-angle-right pagination-next-icon"></i>
                </div>
            </div>
            <p className="pagination-info">
                Showing 1 - 12 of 14 result
            </p>
        </div>
    )
}

export default Pagination
