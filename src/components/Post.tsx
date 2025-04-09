import React from 'react';
import { Heart, MessageCircle, Share2, MoreVertical } from 'lucide-react';

interface PostProps {
  username: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
  isDarkMode: boolean;
  category: string;
}

export function Post({ username, avatar, content, image, likes, comments, timestamp, isDarkMode, category }: PostProps) {
  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm mb-4 overflow-hidden transition-colors duration-200`}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={avatar} 
              alt={username} 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{username}</h3>
              <div className="flex items-center space-x-2">
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{timestamp}</p>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>•</span>
                <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`}>
                  {category}
                </span>
              </div>
            </div>
          </div>
          <button className={`${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
            <MoreVertical size={20} />
          </button>
        </div>
        
        <p className="mt-3">{content}</p>
        
        {image && (
          <div className="mt-3 -mx-4">
            <img src={image} alt="Post content" className="w-full" />
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'}`}>
              <Heart size={20} />
              <span>{likes}</span>
            </button>
            <button className={`flex items-center space-x-2 ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'}`}>
              <MessageCircle size={20} />
              <span>{comments}</span>
            </button>
          </div>
          <button className={`${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}