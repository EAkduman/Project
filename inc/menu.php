        <!-- Sidebar -->
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-section">
                <div class="sidebar-title">Ana Menü</div>
                <button class="nav-item active" onclick="showHome()">
                    <span class="icon">🏠</span>
                    <span class="text">Ana Sayfa</span>
                </button>
                <button class="nav-item" onclick="showSection('recent')">
                    <span class="icon">🕒</span>
                    <span class="text">Son Görüntülenen</span>
                </button>
                <button class="nav-item" onclick="showSection('favorites')">
                    <span class="icon">⭐</span>
                    <span class="text">Favoriler</span>
                </button>
            </div>

            <div class="sidebar-section">
                <div class="sidebar-title">Kategoriler</div>
                <button class="nav-item" onclick="showCategory('infrastructure')">
                    <span class="icon">🖥️</span>
                    <span class="text">Altyapı</span>
                    <span class="count">12</span>
                </button>
                <button class="nav-item" onclick="showCategory('development')">
                    <span class="icon">💻</span>
                    <span class="text">Geliştirme</span>
                    <span class="count">8</span>
                </button>
                <button class="nav-item" onclick="showCategory('security')">
                    <span class="icon">🔒</span>
                    <span class="text">Güvenlik</span>
                    <span class="count">6</span>
                </button>
                <button class="nav-item" onclick="showCategory('procedures')">
                    <span class="icon">📋</span>
                    <span class="text">Prosedürler</span>
                    <span class="count">15</span>
                </button>
                <button class="nav-item" onclick="showCategory('troubleshooting')">
                    <span class="icon">🔧</span>
                    <span class="text">Sorun Giderme</span>
                    <span class="count">9</span>
                </button>
            </div>

            <div class="sidebar-section">
                <div class="sidebar-title">Takımlar</div>
                <button class="nav-item" onclick="showTeam('backend')">
                    <span class="icon">⚙️</span>
                    <span class="text">Backend Ekibi</span>
                </button>
                <button class="nav-item" onclick="showTeam('frontend')">
                    <span class="icon">🎨</span>
                    <span class="text">Frontend Ekibi</span>
                </button>
                <button class="nav-item" onclick="showTeam('devops')">
                    <span class="icon">☁️</span>
                    <span class="text">DevOps Ekibi</span>
                </button>
            </div>
        </aside>