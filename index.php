
<?php include 'inc/header.php'; ?>

    <div class="container">

    <?php include 'inc/menu.php'; ?>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Home Content -->
            <div id="homeContent">
                <div class="breadcrumb">
                    <a href="#" onclick="showHome()">Ana Sayfa</a>
                </div>

                <div class="page-header">
                    <h1 class="page-title">Dokümantasyon Portalına Hoş Geldiniz</h1>
                    <div class="page-meta">
                        <span>Son güncelleme: 19 Haziran 2025</span>
                        <span>•</span>
                        <span>Toplam 50 doküman</span>
                    </div>
                </div>

                <div class="page-actions">
                    <button class="btn btn-primary" onclick="createDocument()">➕ Yeni Doküman</button>
                    <button class="btn" onclick="showTemplates()">📄 Şablonlar</button>
                    <button class="btn" onclick="showRecent()">🕒 Son Düzenlenen</button>
                </div>

                <!-- Popular Documents -->
                <h2 style="margin: 32px 0 16px; color: var(--gray-800);">Popüler Dokümanlar</h2>
                <div class="content-grid">
                    <div class="card" onclick="openDocument('server-setup')">
                        <div class="card-header">
                            <div class="card-icon">🖥️</div>
                            <div class="card-title">Sunucu Kurulum Rehberi</div>
                        </div>
                        <div class="card-description">
                            Linux sunucu kurulumu ve temel konfigürasyon adımları
                        </div>
                        <div class="card-meta">
                            <span>Ahmet Yılmaz • 2 gün önce</span>
                            <span class="tag">Altyapı</span>
                        </div>
                    </div>

                    <div class="card" onclick="openDocument('api-docs')">
                        <div class="card-header">
                            <div class="card-icon">🔌</div>
                            <div class="card-title">API Dokümantasyonu</div>
                        </div>
                        <div class="card-description">
                            RESTful API endpoint'leri ve kullanım örnekleri
                        </div>
                        <div class="card-meta">
                            <span>Mehmet Demir • 1 hafta önce</span>
                            <span class="tag">Geliştirme</span>
                        </div>
                    </div>

                    <div class="card" onclick="openDocument('security-policy')">
                        <div class="card-header">
                            <div class="card-icon">🔒</div>
                            <div class="card-title">Güvenlik Politikası</div>
                        </div>
                        <div class="card-description">
                            Şirket güvenlik kuralları ve uygulanması gereken prosedürler
                        </div>
                        <div class="card-meta">
                            <span>Fatma Özkan • 3 gün önce</span>
                            <span class="tag">Güvenlik</span>
                        </div>
                    </div>

                    <div class="card" onclick="openDocument('deployment-guide')">
                        <div class="card-header">
                            <div class="card-icon">🚀</div>
                            <div class="card-title">Deployment Rehberi</div>
                        </div>
                        <div class="card-description">
                            Uygulama dağıtım süreci ve best practice'ler
                        </div>
                        <div class="card-meta">
                            <span>Can Arslan • 5 gün önce</span>
                            <span class="tag">DevOps</span>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <h2 style="margin: 32px 0 16px; color: var(--gray-800);">Hızlı Erişim</h2>
                <div class="content-grid">
                    <div class="card" onclick="showCategory('procedures')">
                        <div class="card-header">
                            <div class="card-icon">📋</div>
                            <div class="card-title">Tüm Prosedürler</div>
                        </div>
                        <div class="card-description">
                            Standart operasyon prosedürleri ve iş akışları
                        </div>
                    </div>

                    <div class="card" onclick="showCategory('troubleshooting')">
                        <div class="card-header">
                            <div class="card-icon">🔧</div>
                            <div class="card-title">Sorun Giderme</div>
                        </div>
                        <div class="card-description">
                            Yaygın sorunlar ve çözüm yöntemleri
                        </div>
                    </div>
                </div>
            </div>

            <!-- Search Results -->
            <div id="searchResults" class="search-results">
                <div class="page-header">
                    <h1 class="page-title">Arama Sonuçları</h1>
                    <div class="page-meta">
                        <span id="searchQuery"></span> için sonuçlar
                    </div>
                </div>
                <div id="searchResultsList"></div>
            </div>

            <!-- Document Content -->
            <div id="documentContent" class="document-content">
                <div class="breadcrumb">
                    <a href="#" onclick="showHome()">Ana Sayfa</a>
                    <span class="separator">></span>
                    <span id="docBreadcrumb">Doküman</span>
                </div>

                <div class="page-header">
                    <h1 class="page-title" id="docTitle">Doküman Başlığı</h1>
                    <div class="page-meta">
                        <span id="docAuthor">Yazar</span>
                        <span>•</span>
                        <span id="docDate">Tarih</span>
                        <span>•</span>
                        <span id="docViews">Görüntüleme</span>
                    </div>
                </div>

                <div class="page-actions">
                    <button class="btn">✏️ Düzenle</button>
                    <button class="btn">💬 Yorum Yap</button>
                    <button class="btn">📤 Paylaş</button>
                    <button class="btn">⭐ Favorilere Ekle</button>
                </div>

                <div id="docBody">
                    <!-- Document content will be loaded here -->
                </div>
            </div>
        </main>
    </div>
<script src="js/script.js" async></script>
</body>
</html>