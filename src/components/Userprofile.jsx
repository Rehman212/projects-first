"use client";
import { useState, useEffect } from 'react';
import { Camera, Mail, MapPin, Globe, Award, Briefcase, Heart, MessageCircle, Share2, MoreHorizontal, Star, TrendingUp } from 'lucide-react';

export default function UserProfile() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [userName, setUserName] = useState("Alex Rivera"); // default fallback

  useEffect(() => {
    // Try to get the user's real name from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.name) {
          setUserName(parsedUser.name);
        }
      } catch {
        // if not JSON, try plain string
        setUserName(storedUser);
      }
    }
  }, []);

  const user = {
    name: userName,
    username: userName,
    role: "Creative Developer & Designer",
    location: "New York, USA",
    bio: "Building beautiful digital experiences ✨ | Open source enthusiast | Coffee addict ☕",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    cover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1400&h=400&fit=crop",
    verified: true,
    stats: {
      followers: "24.5K",
      following: "892",
      posts: "1.2K"
    }
  };

  const badges = [
    { icon: Star, label: "Top Contributor", color: "from-yellow-400 to-orange-500" },
    { icon: Award, label: "Verified Pro", color: "from-blue-400 to-cyan-500" },
    { icon: TrendingUp, label: "Rising Star", color: "from-purple-400 to-pink-500" }
  ];

  const skills = ["React", "Next.js", "TypeScript", "UI/UX", "Tailwind", "Figma"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Cover Section */}
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-90" />
            <img 
              src={user.cover} 
              alt="Cover" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
            
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all border border-white/30">
                <Share2 className="w-4 h-4 text-white" />
              </button>
              <button className="p-2.5 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-all border border-white/30">
                <MoreHorizontal className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="relative px-8 pb-8">
            <div className="flex items-end justify-between -mt-16 mb-6">
              <div className="relative">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-32 h-32 rounded-2xl border-4 border-white shadow-2xl object-cover"
                />
                <div className="absolute -bottom-2 -right-2 p-1.5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg shadow-lg">
                  <Camera className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                    isFollowing 
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
                <button className="p-2.5 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      {user.name}
                    </h1>
                    {user.verified && (
                      <div className="p-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm font-medium">{user.username}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-4 text-gray-600">
                <Briefcase className="w-4 h-4" />
                <span className="text-sm font-medium">{user.role}</span>
                <span className="text-gray-300">•</span>
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{user.location}</span>
              </div>

                <p className="text-gray-700 text-base leading-relaxed pt-2">
                {user.bio}
              </p>
                         <div className="flex gap-8 py-4">
                <div className="cursor-pointer hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-gray-900">{user.stats.posts}</div>
                  <div className="text-xs text-gray-500 font-medium">Posts</div>
                </div>
                <div className="cursor-pointer hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-gray-900">{user.stats.followers}</div>
                  <div className="text-xs text-gray-500 font-medium">Followers</div>
                </div>
                <div className="cursor-pointer hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-gray-900">{user.stats.following}</div>
                  <div className="text-xs text-gray-500 font-medium">Following</div>
                </div>
              </div>
          </div>
        </div>
        

        {/* Extra cards remain unchanged */}
      </div>
    </div>
  );
}
