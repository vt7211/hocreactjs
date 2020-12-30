// import { useState } from 'react'
import Input from './common/Input'
import Button from './common/Button'

export default function DemoComponent() {
  // const [password, setPassword] = useState('');

  return (
    <div className="tcl-container">
      <div className="tcl-row">
        <div className="tcl-col-4">
          {/* <input type="text" value="hello" /> */}
          <Input />
          <hr></hr>
          <Input 
            labelText="Email" 
            placeholder="Nhap Email ..." 
          />
          <hr></hr>
          <Input 
            labelText="Email" 
          />
          <hr></hr>
          <Input 
            errorText="Email khong hop le"
            labelText="Email" 
            placeholder="Nhap Email ..." 
          />
          <Input 
            isShowErrorText
            labelText="Email" 
            placeholder="Nhap Email ..." 
          />
          <Input 
            isShowErrorText
            errorText="Email khong hop le"
            labelText="Email" 
            placeholder="Nhap Email ..." 
          />
          <hr></hr>
          <Input 
            labelText="Password" 
            type="password" 
            placeholder="Nhap Password ..."
            // value="test"
            // value={password}
            value="hello"
            // onChange={(evt) => {
            //   console.log('onChange Ben Ngoài', evt.target.value);
            // }}
          />
        </div>
        <div className="tcl-col-4">
          <Button href="#"
            text="View More"
          />
          <Button href="#"
            text="View More"
            type="category"
          />
          <Button href="#"
            text="Load More"
            type="primary"
            spin
            size="large"
          />
          <Button href="#"
            text="Submit"
            type="primary"
            size="large"
          />
        </div>
      </div>
    </div>
  )
}