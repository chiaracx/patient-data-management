import '../styles/Card.css';
import defaultAvatar from '../assets/user.svg';
import collapseIcon from '../assets/collapseIcon.svg';
import expandIcon from '../assets/expandIcon.svg';
import editIcon from '../assets/editIcon.svg';
import addIcon from '../assets/addIcon.svg';
import { useState } from 'react';

const ProfileCard = ({ name, avatar, description, website, createdDate, patient, onEdit }) => {
    const srcAvatar = avatar || defaultAvatar;
    const [expanded, setExpanded] = useState(false);

    return(
        <div className={`card bg-white shadow-md rounded-2xl p-4 max-w-xs ${
            expanded ? 'card--expanded' : 'card--collapsed'
        }`}>
            <div className="card--tools flex flex-row justify-between">
                <button onClick={ () => onEdit(patient)}>
                    <img 
                    className="w-5 h-5 rounded-full" 
                    src={editIcon} 
                    alt="Edit Patient Icon"
                    onError={(e) => (e.target.src = defaultAvatar)}
                    />
                </button>
                <button>
                    <img
                    className="w-5 h-5 rounded-full"
                    src={addIcon}
                    alt="Add Patient Icon"
                    onError={(e) => (e.target.src = defaultAvatar)}
                    />
                </button>
            </div>
            <div className="card--header">
                <img 
                className="w-24 h-24 rounded-full mx-auto" 
                src={srcAvatar} 
                alt={name || 'User'}
                onError={(e) => (e.target.src = defaultAvatar)}
                />
                <h2 className="card--title text-xl font-semibold text-center mt-2">{name}</h2>
            </div>
        
            <div className="card--content">
                <p className="text-sm text-gray-500 text-center">{new Date(createdDate).toLocaleDateString()}</p>
                <p className="text-gray-700 text-sm mt-2">{description}</p>
            </div>
            <div className="card--link">
                <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-4 font-semibold text-cyan-700"
                >
                    Visit website
                </a>
            </div>
            <div className='card--footer'>
                <button className="w-full bg-cyan-700 rounded-b-2xl card--button" onClick={() => setExpanded(!expanded)}>
                    <img className="w-8 h-8 rounded-full"  src={expanded ? collapseIcon : expandIcon} alt="Button Icon" />
                    <span className="text-white font-bold text-sm">{ expanded ? 'Collapse' : 'Expand' }</span>
                </button>
            </div>
            
        </div>
  );
}
export default ProfileCard;


