import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Card } from 'react-bootstrap';
import { fetchSpecial } from '../http/special';
import { Context } from '..';



const Speciality = observer(() => {
//     const {Special} = useContext(Context)
//     useEffect(() => {
//     fetchSpecial().then(data => Special.setSpecial(data))
// },  [])
const specs = [
{ id: 1, name: 'ПОКС' },
{ id: 2, name: 'ПОИТ' },
{ id: 3, name: 'МО' },
{ id: 4, name: 'УИР' },
];

return (
<div>
{specs.map((spec) => (
<Card key={spec.id} className="mb-3">
<Card.Body>{spec.name}</Card.Body>
</Card>
))}
</div>
);
});

export default Speciality;