import React, { useContext, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { createItem } from '../../api';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import TextBox from '../../components/TextBox';
import { GlobalContext } from '../../contexts/GlobalContext';
// import { pathLinks } from '../../pathLinks';
import './style.less';

const CreateItem: React.FC = () => {
  // const history = useHistory();
  const { apiUrl } = useContext(GlobalContext);
  const [name, setName] = useState(''); // state for name
  const descriptionState = useState('');
  const priceState = useState('');
  return (
    <>
      <Navbar title="Create Item" />
      <div className="createItem">
        <p className="createItem-description">Add an item to the world’s greatest store</p>
        <TextBox inputType="text" value={name} label="name" onChange={(t) => setName(t)} />
        <TextBox inputType="text" value={descriptionState[0]} label="description" onChange={(t) => descriptionState[1](t)} />
        <TextBox inputType="text" value={priceState[0]} label="price" onChange={(t) => priceState[1](t)} />
        <Button
          text="Create Item"
          onClick={async () => {
            const priceNum = parseFloat(priceState[0]);
            await createItem(apiUrl, name, descriptionState[0], priceNum);
            // history.push(pathLinks.home); // when we're done, go home to see the new item!
          }}
        />
      </div>
    </>
  );
};

export default CreateItem;
