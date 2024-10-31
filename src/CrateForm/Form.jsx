import React from 'react'

export default function Form() {
  return (
    <div className='container'>
        <h2>Thông tin sinh viên</h2>
        <div className='d-flex justify-content-center row gap-3'>
            <div className="col-4">
                <input  type="text" placeholder='Mã SV'/>
            </div>
            <div className="col-4">
                <input type="text" placeholder='Họ và Tên'/>
            </div>
            <div className="col-4">
                <input type="text" placeholder='SĐT'/>
            </div>
            <div className="col-4">
                <input type="text" placeholder='Email'/>
            </div>           
        </div>
        <button className='btn btn-success'>Thêm Sinh Viên</button>
    </div>
  )
}
