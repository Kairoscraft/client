import React, { useState } from 'react';
import { Post } from './components/Post';
import { Menu } from './components/Menu';
import { Menu as MenuIcon, Github, Twitter, Linkedin } from 'lucide-react';

const posts = [
  {
    username: "Moises Baldenegro",
    avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    content: "Saludos Anchelito aca andare subiendo todo lo que voy estudiando de poker 🏔️",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200",
    likes: 234,
    comments: 18,
    timestamp: "2 hours ago",
    category: "Outdoors"
  },
  {
    username: "Alex Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    content: "Probando si los post funcionan bien por aca 🎨",
    likes: 156,
    comments: 24,
    timestamp: "4 hours ago",
    category: "Design"
  }, 
  {
    username: "Emily Parker",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    content: "Just tried this amazing new café downtown! The coffee is incredible ☕",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200",
    likes: 342,
    comments: 28,
    timestamp: "6 hours ago",
    category: "Food"
  }
];

const categories = ["All", "Outdoors", "Design", "Food", "Technology", "Travel"];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} transition-colors duration-200`}>
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm relative`}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Headsapp Feed</h1>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            <MenuIcon size={24} />
          </button>
        </div>
        <Menu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      </header>
      
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-2xl mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${selectedCategory === category
                    ? isDarkMode
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-500 text-white'
                    : isDarkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-2xl mx-auto px-4 py-6 w-full">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <Post key={index} {...post} isDarkMode={isDarkMode} />
          ))
        ) : (
          <div className={`
            text-center py-10 rounded-lg
            ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}
          `}>
            <p className="text-lg">No posts found in this category</p>
          </div>
        )}
      </main>

      <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold">Headsapp Feed</h2>
            <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Connect, Share, and Engage with your community
            </p>
            <div className="flex space-x-6 mt-4">
              <a href="https://www.instagram.com/moibaldenegro_/" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                <Twitter size={24} />
              </a>
              <a href="https://github.com/MoiBaldenegro" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                <Github size={24} />
              </a>
              <a href="https://github.com/MoiBaldenegro" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                <Linkedin size={24} />
              </a>
            </div>
            <div className={`w-full border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} mt-6 pt-6 text-center`}>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} Headsapp Feed. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
