import styled from 'styled-components';
const Style = ()=>{
    const Select = styled.select`
// font-size:10px
width:150px;
outline: none;
border-radius: 5px;
`;
const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;

`;
const Wraper = styled.div`

`;
    return(
<Wraper>
      <Div>
        <Select>
        <option selected value='garigeba'>გარიგების ტიპი</option>
        <option value='yidva'>ყიდვა</option>
        <option value='qiravdeba'>ქირავდება</option>
      </Select>
      <Select>
        <option selected value='mwarmoebeli'>მწარმოებელი</option>
        <option value='audi'>audi</option>
        <option value='rangerover'>range-rover</option>
        <option value='toyota'>toyota</option>
      </Select>
      <Select >
        <option selected value='kategoria'>კატეგორია</option>
        <option value='audi'>სედანი</option>
        <option value='rangerover'>ჯიპი</option>
        <option value='toyota'>კუპე</option>
      </Select>
      </Div>
      <Div>
        <Select>
        <option selected value='transmisia'>ტრანსმისია</option>
        <option value='meqanika'>მექანიკა</option>
        <option value='avtomatika'>ავტომატიკა</option>
      </Select>
      <Select>
        <option selected value='sawvavi'>საწვავის ტიპი</option>
        <option value='benzini'>ბენზინი</option>
        <option value='dizeli'>დიზელი</option>
        <option value='hibridi'>ჰიბრიდი</option>
      </Select>
      <Select >
        <option selected value='ganbajeba'>განბაჟება</option>
        <option value='diax'>დიახ</option>
        <option value='ara'>არა</option>
        
      </Select>
      </Div>
    </Wraper>
    )
}


export default Style




