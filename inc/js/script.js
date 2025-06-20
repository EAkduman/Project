       // Sample data
        const documents = {
            'server-setup': {
                title: 'Sunucu Kurulum Rehberi',
                author: 'Ahmet Yılmaz',
                date: '17 Haziran 2025',
                views: '234 görüntüleme',
                category: 'Altyapı',
                content: `
                    <h2>Genel Bakış</h2>
                    <p>Bu doküman, yeni bir Linux sunucusunun kurulumu ve temel konfigürasyonu için adım adım rehber sağlar.</p>
                    
                    <h2>Gereksinimler</h2>
                    <ul>
                        <li>Ubuntu 20.04 LTS veya daha yeni</li>
                        <li>En az 4GB RAM</li>
                        <li>50GB disk alanı</li>
                        <li>Root erişimi</li>
                    </ul>
                    
                    <h2>Kurulum Adımları</h2>
                    <h3>1. Sistem Güncellemesi</h3>
                    <pre><code>sudo apt update && sudo apt upgrade -y</code></pre>
                    
                    <h3>2. Güvenlik Duvarı Konfigürasyonu</h3>
                    <pre><code>sudo ufw enable
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https</code></pre>
                    
                    <h3>3. SSH Sertleştirme</h3>
                    <p>SSH konfigürasyonunu güvenli hale getirmek için <code>/etc/ssh/sshd_config</code> dosyasını düzenleyin:</p>
                    <pre><code>PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes</code></pre>
                    
                    <h2>Doğrulama</h2>
                    <p>Kurulum tamamlandıktan sonra sistem durumunu kontrol edin:</p>
                    <pre><code>systemctl status ssh
ufw status
df -h</code></pre>
                `
            },
            'api-docs': {
                title: 'API Dokümantasyonu',
                author: 'Mehmet Demir',
                date: '12 Haziran 2025',
                views: '156 görüntüleme',
                category: 'Geliştirme',
                content: `
                    <h2>API Genel Bakış</h2>
                    <p>Bu RESTful API, kullanıcı yönetimi ve veri erişimi için endpoint'ler sağlar.</p>
                    
                    <h2>Kimlik Doğrulama</h2>
                    <p>Tüm API çağrıları Bearer token ile yetkilendirilmelidir:</p>
                    <pre><code>Authorization: Bearer YOUR_TOKEN_HERE</code></pre>
                    
                    <h2>Endpoint'ler</h2>
                    
                    <h3>Kullanıcılar</h3>
                    <h4>GET /api/users</h4>
                    <p>Tüm kullanıcıları listeler</p>
                    <pre><code>{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}</code></pre>
                    
                    <h4>POST /api/users</h4>
                    <p>Yeni kullanıcı oluşturur</p>
                    <pre><code>{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securepassword"
}</code></pre>
                    
                    <h2>Hata Kodları</h2>
                    <ul>
                        <li><code>400</code> - Bad Request</li>
                        <li><code>401</code> - Unauthorized</li>
                        <li><code>404</code> - Not Found</li>
                        <li><code>500</code> - Internal Server Error</li>
                    </ul>
                `
            }
        };

        const searchData = [
            { title: 'Sunucu Kurulum Rehberi', excerpt: 'Linux sunucu kurulumu ve temel konfigürasyon...', id: 'server-setup' },
            { title: 'API Dokümantasyonu', excerpt: 'RESTful API endpoint\'leri ve kullanım örnekleri...', id: 'api-docs' },
            { title: 'Güvenlik Politikası', excerpt: 'Şirket güvenlik kuralları ve prosedürler...', id: 'security-policy' },
            { title: 'Docker Kurulum Rehberi', excerpt: 'Container teknolojisi kurulum adımları...', id: 'docker-setup' },
            { title: 'Database Backup Prosedürü', excerpt: 'Veritabanı yedekleme ve geri yükleme...', id: 'db-backup' }
        ];

        // Navigation functions
        function showHome() {
            hideAllContent();
            document.getElementById('homeContent').style.display = 'block';
            setActiveNav(0);
        }

        function showSection(section) {
            hideAllContent();
            // Implement section-specific content
            console.log('Showing section:', section);
        }

        function showCategory(category) {
            hideAllContent();
            // Implement category-specific content
            console.log('Showing category:', category);
        }

        function showTeam(team) {
            hideAllContent();
            // Implement team-specific content
            console.log('Showing team:', team);
        }

        function hideAllContent() {
            document.getElementById('homeContent').style.display = 'none';
            document.getElementById('searchResults').classList.remove('active');
            document.getElementById('documentContent').classList.remove('active');
        }

        function setActiveNav(index) {
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => item.classList.remove('active'));
            if (navItems[index]) {
                navItems[index].classList.add('active');
            }
        }

        // Search functionality
        function performSearch() {
            const query = document.getElementById('searchInput').value.trim();
            if (!query) return;

            hideAllContent();
            
            const results = searchData.filter(item => 
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.excerpt.toLowerCase().includes(query.toLowerCase())
            );

            document.getElementById('searchQuery').textContent = `"${query}"`;
            
            const resultsHtml = results.map(result => `
                <div class="search-result-item" onclick="openDocument('${result.id}')">
                    <div class="search-result-title">${result.title}</div>
                    <div class="search-result-excerpt">${result.excerpt}</div>
                </div>
            `).join('');

            document.getElementById('searchResultsList').innerHTML = resultsHtml || 
                '<div style="padding: 20px; text-align: center; color: var(--gray-600);">Sonuç bulunamadı</div>';
            
            document.getElementById('searchResults').classList.add('active');
        }

        // Document functions
        function openDocument(docId) {
            const doc = documents[docId];
            if (!doc) {
                console.log('Document not found:', docId);
                return;
            }

            hideAllContent();
            
            document.getElementById('docBreadcrumb').textContent = doc.category;
            document.getElementById('docTitle').textContent = doc.title;
            document.getElementById('docAuthor').textContent = doc.author;
            document.getElementById('docDate').textContent = doc.date;
            document.getElementById('docViews').textContent = doc.views;
            document.getElementById('docBody').innerHTML = doc.content;
            
            document.getElementById('documentContent').classList.add('active');
        }

        function createDocument() {
            alert('Yeni doküman oluşturma özelliği yakında eklenecek!');
        }

        function showTemplates() {
            alert('Şablon galerisi yakında eklenecek!');
        }

        function showRecent() {
            alert('Son düzenlenen dokümanlar yakında eklenecek!');
        }

        // Search on Enter key
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Mobile menu toggle
        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('mobile-open');
        }

        // Add mobile menu button for responsive design
        if (window.innerWidth <= 768) {
            const header = document.querySelector('.header');
            const menuBtn = document.createElement('button');
            menuBtn.innerHTML = '☰';
            menuBtn.style.cssText = 'background: none; border: none; color: white; font-size: 20px; cursor: pointer; margin-right: 16px;';
            menuBtn.onclick = toggleMobileMenu;
            header.insertBefore(menuBtn, header.firstChild);
        }

        // Sample additional documents for completeness
        documents['security-policy'] = {
            title: 'Güvenlik Politikası',
            author: 'Fatma Özkan',
            date: '16 Haziran 2025',
            views: '189 görüntüleme',
            category: 'Güvenlik',
            content: `
                <h2>Giriş</h2>
                <p>Bu doküman, şirketimizin bilgi güvenliği politikalarını ve uygulanması gereken prosedürleri içerir.</p>
                
                <h2>Genel Güvenlik Kuralları</h2>
                <ul>
                    <li>Güçlü parolalar kullanın (en az 12 karakter, büyük/küçük harf, sayı ve sembol)</li>
                    <li>İki faktörlü kimlik doğrulamayı etkinleştirin</li>
                    <li>Düzenli olarak parola değiştirin</li>
                    <li>Şüpheli e-postaları açmayın</li>
                    <li>Güvenlik güncellemelerini derhal uygulayın</li>
                </ul>
                
                <h2>Veri Koruma</h2>
                <h3>Hassas Veriler</h3>
                <p>Aşağıdaki veri türleri hassas olarak sınıflandırılır:</p>
                <ul>
                    <li>Müşteri kişisel bilgileri</li>
                    <li>Finansal veriler</li>
                    <li>İç ticari sırlar</li>
                    <li>Sistem kimlik bilgileri</li>
                </ul>
                
                <h3>Veri Şifreleme</h3>
                <p>Tüm hassas veriler şifrelenerek saklanmalıdır:</p>
                <pre><code># AES-256 şifreleme örneği
openssl enc -aes-256-cbc -salt -in data.txt -out data.txt.enc</code></pre>
                
                <h2>Olay Raporlama</h2>
                <p>Güvenlik olayları derhal güvenlik ekibine bildirilmelidir:</p>
                <ul>
                    <li>E-posta: security@company.com</li>
                    <li>Telefon: +90 555 123 4567</li>
                    <li>Dahili: #security-alerts</li>
                </ul>
            `
        };

        documents['deployment-guide'] = {
            title: 'Deployment Rehberi',
            author: 'Can Arslan',
            date: '14 Haziran 2025',
            views: '267 görüntüleme',
            category: 'DevOps',
            content: `
                <h2>Deployment Süreci</h2>
                <p>Bu rehber, uygulama dağıtım sürecinin tüm aşamalarını kapsar.</p>
                
                <h2>Ön Hazırlık</h2>
                <h3>Gerekli Kontroller</h3>
                <ul>
                    <li>Kod review tamamlandı mı?</li>
                    <li>Tüm testler geçti mi?</li>
                    <li>Database migration'lar hazır mı?</li>
                    <li>Rollback planı mevcut mu?</li>
                </ul>
                
                <h2>Deployment Adımları</h2>
                
                <h3>1. Staging Ortamında Test</h3>
                <pre><code>git checkout main
git pull origin main
docker build -t app:staging .
docker-compose -f docker-compose.staging.yml up -d</code></pre>
                
                <h3>2. Production Deployment</h3>
                <pre><code># Blue-Green deployment
kubectl apply -f k8s/blue-deployment.yaml
kubectl wait --for=condition=ready pod -l app=myapp,version=blue
kubectl patch service myapp-service -p '{"spec":{"selector":{"version":"blue"}}}'</code></pre>
                
                <h3>3. Health Check</h3>
                <pre><code>curl -f http://localhost/health
curl -f http://localhost/api/status</code></pre>
                
                <h2>Rollback Prosedürü</h2>
                <p>Sorun durumunda hızlı geri alma:</p>
                <pre><code>kubectl patch service myapp-service -p '{"spec":{"selector":{"version":"green"}}}'
kubectl delete deployment myapp-blue</code></pre>
                
                <h2>Monitoring</h2>
                <ul>
                    <li>Application logs kontrol edin</li>
                    <li>Error rate'i izleyin</li>
                    <li>Response time metriklerini takip edin</li>
                    <li>Resource usage'ı kontrol edin</li>
                </ul>
            `
        };

        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            showHome();
        });