# GiggleLoop 🎬

*Turn giggles into loops!* GiggleLoop is an AI-powered web application that generates hilarious GIFs and short videos from text descriptions. Perfect for creating viral memes and social media content in seconds.

## ✨ Features
- **Text-to-GIF/Video:** Generate funny looping content from simple text prompts
- **Lightning Fast:** Optimized pipelines for quick generation (target: <30s)
- **Web Interface:** Simple and intuitive React-based UI
- **API Ready:** Clean backend API for future expansion
- **Social Ready:** Easy sharing and download options

## 🚀 Quick Start

### Prerequisites
- Python 3.9+
- Node.js 16+
- GPU with CUDA support (recommended) or CPU

## Installation

### Clone the repository
```bash
git clone https://github.com/your-username/giggleloop.git
cd giggleloop
```

### Set up backend
```bash
cd backend
pip install -r requirements.txt
```

### Set up frontend
```bash
cd frontend
npm install
```

### Download models
```bash
# Download base models (you can automate this in your setup script)
python scripts/download_models.py
```

### Run the application
```bash
# Terminal 1: Start backend
cd backend && python app.py

# Terminal 2: Start frontend  
cd frontend && npm run dev
```

Visit http://localhost:3000 to start giggling! 🎉

## 🛠️ Tech Stack

### Backend
- **FastAPI** - Modern, fast web framework
- **PyTorch** - Deep learning framework
- **Diffusers** - State-of-the-art diffusion models
- **AnimateDiff** - Video generation pipeline
- **Redis** - Job queue and caching

### Frontend
- **React/Next.js** - UI framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Query** - Data fetching

### Infrastructure
- **Docker** - Containerization
- **Celery** - Distributed task queue
- **Cloudflare** - CDN and deployment

## 🎯 Roadmap

### Phase 1 (MVP - Current)
- Basic text-to-GIF generation
- Web interface
- Simple download/share
- Rate limiting
- Basic analytics

### Phase 2
- User accounts
- Prompt templates
- Advanced editing (add text, crop, speed)
- Mobile app
- Batch generation

### Phase 3
- AI-powered suggestions
- Voice-to-video
- Multi-style models
- Marketplace for prompts

## 🤝 Contributing
We love contributions! Here's how to help:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our Contributing Guidelines for details.

## 📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support
Having trouble?

- 📖 Check our documentation
- 🐛 Open an issue
- 💬 Join our Discord community

## 🙏 Acknowledgments
- Built with amazing open source models from the community
- Inspired by meme creators everywhere
- Supported by caffeine and too many late nights

*Let's make the internet giggle, one loop at a time!* 🎉
