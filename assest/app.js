/**
 * ACE Holding Enterprise (هلدینگ ایس - شماره ثبت ۳۶۵)
 * Pure Vanilla JavaScript — Ready for GitHub Pages Drag & Drop Deployment
 */

(function () {
  'use strict';

  // Utility: Convert English/Arabic digits to Persian digits
  function toPersianDigits(str) {
    if (str === null || str === undefined) return '';
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(str).replace(/[0-9]/g, function (w) {
      return persianDigits[+w];
    }).replace(/[٠-٩]/g, function (w) {
      return persianDigits[w.charCodeAt(0) - 1632];
    });
  }

  // Utility: Convert Persian/Arabic digits to English digits for validation
  function toEnglishDigits(str) {
    if (!str) return '';
    return String(str)
      .replace(/[۰-۹]/g, function (d) {
        return String(d.charCodeAt(0) - 1776);
      })
      .replace(/[٠-٩]/g, function (d) {
        return String(d.charCodeAt(0) - 1632);
      });
  }

  // Validate Iranian Mobile Number (09xxxxxxxxx)
  function isValidIranianMobile(value) {
    const clean = toEnglishDigits(value).replace(/[\s\-()]/g, '');
    return /^09\d{9}$/.test(clean);
  }

  // Ecosystem Nodes Data for "Synergy Ecosystem Diagram"
  const ECOSYSTEM_DATA = {
    core: {
      title: 'هسته مرکزی هلدینگ ایس (ثبت ۳۶۵)',
      category: 'مدیریت استراتژیک سرمایه · حاکمیت شرکتی',
      description: 'نهاد مادر در تخصیص بهینه سرمایه، نظارت حقوقی، مهندسی مالی و ایجاد هم‌افزایی عملیاتی میان شرکت‌های تابعه و استارتاپ‌های پورتفولیو.',
      metricValue: '۳۶۵',
      metricLabel: 'شماره ثبت رسمی و اعتبار حقوقی یکپارچه',
      synergyFlow: 'تأمین سرمایه بذری تا سری B + زیرساخت حقوقی و مالی متمرکز',
      ctaProduct: 'مشاوره سرمایه‌گذاری و پذیرش هلدینگ'
    },
    fintech: {
      title: 'بازوی فناوری مالی و پرداخت (ایس‌پِی)',
      category: 'فین‌تک سازمانی · تسویه زنجیره تأمین',
      description: 'ارائه‌دهنده درگاه‌های تسویه آنی B2B، مدیریت نقدینگی شرکتی و اعتبارسنجی هوشمند زنجیره تأمین برای صنایع بزرگ کشور.',
      metricValue: '+۱۴۰٪',
      metricLabel: 'افزایش سرعت گردش نقدینگی شرکت‌های همکار در ۶ ماه',
      synergyFlow: 'ارائه زیرساخت بانکی و اعتباری به تمامی شرکت‌های زیست‌بوم ایس',
      ctaProduct: 'پلتفرم مدیریت نقدینگی و فین‌تک سازمانی'
    },
    logistics: {
      title: 'شبکه لجستیک و زنجیره تأمین هوشمند',
      category: 'اتوماسیون صنعتی · لجستیک نسل چهارم',
      description: 'بهینه‌سازی مسیرهای توزیع مویرگی، انبارداری مکانیزه و رهگیری لحظه‌ای محموله‌های صنعتی با بهره‌گیری از الگوریتم‌های پیش‌بینی تقاضا.',
      metricValue: '۳۸٪-',
      metricLabel: 'کاهش هزینه‌های عملیاتی توزیع و انبارداری سالانه',
      synergyFlow: 'پشتیبانی لجستیکی انحصاری از تولیدکنندگان و پلتفرم‌های بازرگانی هلدینگ',
      ctaProduct: 'سامانه هوشمند لجستیک و زنجیره تأمین'
    },
    venture: {
      title: 'استودیو ونچربیلدینگ و شتاب‌دهی ایس',
      category: 'سرمایه‌گذاری جسورانه · توسعه کسب‌وکار',
      description: 'هم‌بنیان‌گذاری استارتاپ‌های B2B، تزریق سرمایه هوشمند (Smart Money) و اتصال مستقیم محصولات نوآورانه به بازار صنایع سنتی.',
      metricValue: '۲۴ شرکت',
      metricLabel: 'پورتفولیوی فعال با نرخ بقای ۹۲ درصدی در ۳ سال اول',
      synergyFlow: 'تبدیل ایده‌های صنعتی به شرکت‌های مقیاس‌پذیر با بازار تضمین‌شده',
      ctaProduct: 'بسته سرمایه‌گذاری و هم‌بنیان‌گذاری ونچر'
    },
    cloud: {
      title: 'زیرساخت ابری و امنیت داده سازمانی',
      category: 'کلود اختصاصی · امنیت سایبری B2B',
      description: 'میزبانی مراکز داده اختصاصی، پایداری سرویس‌های حیاتی (SLA 99.95%) و حفاظت چندلایه از داده‌های مالی و تجاری هلدینگ.',
      metricValue: '۹۹.۹۵٪',
      metricLabel: 'ضریب پایداری تضمین‌شده (Uptime) زیرساخت‌های ابری',
      synergyFlow: 'تأمین امنیت سایبری و سرورهای اختصاصی کلیه اعضای اکوسیستم',
      ctaProduct: 'زیرساخت ابری اختصاصی و امنیت سازمانی'
    },
    commerce: {
      title: 'پلتفرم بازرگانی و تدارکات کلان B2B',
      category: 'تجارت الکترونیک صنعتی · تأمین مواد اولیه',
      description: 'بازارگاه یکپارچه معاملات عمده صنعتی، حذف واسطه‌های غیرضروری و تضمین اصالت و کیفیت در قراردادهای تأمین بلندمدت.',
      metricValue: '۴.۸ همت',
      metricLabel: 'حجم ناخالص معاملات (GMV) ثبت‌شده در سال مالی اخیر',
      synergyFlow: 'ایجاد کانال فروش مستقیم برای محصولات شرکت‌های تابعه هلدینگ',
      ctaProduct: 'پلتفرم تدارکات و بازرگانی کلان B2B'
    }
  };

  // Initialize Mobile Menu
  function initMobileNav() {
    const btn = document.getElementById('mobile-menu-toggle');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (!btn || !drawer) return;

    btn.addEventListener('click', function () {
      const isOpen = drawer.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Initialize Synergy Ecosystem Interactive Diagram
  function initEcosystemDiagram() {
    const nodeGroups = document.querySelectorAll('[data-eco-node]');
    if (!nodeGroups.length) return;

    const titleEl = document.getElementById('eco-detail-title');
    const catEl = document.getElementById('eco-detail-category');
    const descEl = document.getElementById('eco-detail-desc');
    const metricValEl = document.getElementById('eco-detail-metric-val');
    const metricLblEl = document.getElementById('eco-detail-metric-lbl');
    const flowEl = document.getElementById('eco-detail-flow');
    const orderBtn = document.getElementById('eco-detail-order-btn');

    function selectNode(nodeKey) {
      const data = ECOSYSTEM_DATA[nodeKey];
      if (!data) return;

      nodeGroups.forEach(function (el) {
        const key = el.getAttribute('data-eco-node');
        el.classList.toggle('active', key === nodeKey);
      });

      const linkLines = document.querySelectorAll('[data-eco-link]');
      linkLines.forEach(function (line) {
        const key = line.getAttribute('data-eco-link');
        line.classList.toggle('active', nodeKey === 'core' || key === nodeKey);
      });

      if (titleEl) titleEl.textContent = data.title;
      if (catEl) catEl.textContent = data.category;
      if (descEl) descEl.textContent = data.description;
      if (metricValEl) metricValEl.textContent = data.metricValue;
      if (metricLblEl) metricLblEl.textContent = data.metricLabel;
      if (flowEl) flowEl.textContent = data.synergyFlow;
      if (orderBtn) {
        orderBtn.setAttribute('data-order-product', data.ctaProduct);
      }
    }

    nodeGroups.forEach(function (el) {
      el.addEventListener('click', function () {
        selectNode(el.getAttribute('data-eco-node'));
      });
      el.addEventListener('mouseenter', function () {
        selectNode(el.getAttribute('data-eco-node'));
      });
    });
  }

  // Initialize Eligibility Checklist Interactive Simulator
  function initEligibilityChecklist() {
    const items = document.querySelectorAll('[data-eligibility-item]');
    const scoreEl = document.getElementById('eligibility-score-val');
    const statusEl = document.getElementById('eligibility-status-text');
    if (!items.length) return;

    function updateScore() {
      let checkedCount = 0;
      items.forEach(function (item) {
        if (item.classList.contains('checked')) {
          checkedCount++;
        }
      });
      const total = items.length;
      const pct = Math.round((checkedCount / total) * 100);
      if (scoreEl) {
        scoreEl.textContent = toPersianDigits(pct) + '٪ (' + toPersianDigits(checkedCount) + ' از ' + toPersianDigits(total) + ' معیار)';
      }
      if (statusEl) {
        if (pct >= 80) {
          statusEl.textContent = 'واجد شرایط اولویت‌دار جهت طرح در کمیته سرمایه‌گذاری هلدینگ ایس';
          statusEl.style.color = '#0D9488';
        } else if (pct >= 50) {
          statusEl.textContent = 'واجد شرایط بررسی اولیه در دوره شتاب‌دهی و هم‌آفرینی';
          statusEl.style.color = '#1E3E62';
        } else {
          statusEl.textContent = 'نیازمند تکمیل مستندات پایه پیش از ارسال پرونده پذیرش';
          statusEl.style.color = '#64748B';
        }
      }
    }

    items.forEach(function (item) {
      item.addEventListener('click', function () {
        item.classList.toggle('checked');
        const badge = item.querySelector('.check-circle');
        if (badge) {
          badge.style.backgroundColor = item.classList.contains('checked') ? '#0D9488' : '#94A3B8';
        }
        updateScore();
      });
    });

    updateScore();
  }

  // Initialize Product Category Filtering & Search on products.html
  function initProductsFilter() {
    const filterButtons = document.querySelectorAll('[data-product-filter]');
    const productCards = document.querySelectorAll('[data-product-category]');
    const countDisplay = document.getElementById('products-count-display');

    if (!filterButtons.length || !productCards.length) return;

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const selectedCategory = btn.getAttribute('data-product-filter');

        filterButtons.forEach(function (b) {
          b.classList.toggle('active', b === btn);
        });

        let visibleCount = 0;
        productCards.forEach(function (card) {
          const cardCat = card.getAttribute('data-product-category');
          const match = selectedCategory === 'all' || cardCat === selectedCategory;
          card.style.display = match ? '' : 'none';
          if (match) visibleCount++;
        });

        if (countDisplay) {
          countDisplay.textContent = 'نمایش ' + toPersianDigits(visibleCount) + ' راهکار سازمانی فعال';
        }
      });
    });
  }

  // Initialize Interactive Synergy & Budget Estimator on products.html
  function initRoiEstimator() {
    const scaleSelect = document.getElementById('estimator-scale');
    const moduleSelect = document.getElementById('estimator-module');
    const durationInput = document.getElementById('estimator-duration');
    const durationLabel = document.getElementById('estimator-duration-label');
    const outSaving = document.getElementById('estimator-out-saving');
    const outTimeline = document.getElementById('estimator-out-timeline');
    const outPackage = document.getElementById('estimator-out-package');
    const orderEstimatedBtn = document.getElementById('estimator-order-btn');

    if (!scaleSelect || !moduleSelect || !durationInput) return;

    function calculate() {
      const scaleFactor = parseFloat(scaleSelect.value) || 1;
      const moduleType = moduleSelect.value;
      const months = parseInt(durationInput.value, 10) || 12;

      if (durationLabel) {
        durationLabel.textContent = toPersianDigits(months) + ' ماه';
      }

      let baseEfficiency = 28;
      let pkgName = 'بسته جامع تحول سازمانی ایس';
      let deployWeeks = 6;

      if (moduleType === 'fintech') {
        baseEfficiency = 36;
        pkgName = 'پلتفرم مدیریت نقدینگی و فین‌تک سازمانی (ایس‌پِی)';
        deployWeeks = 4;
      } else if (moduleType === 'logistics') {
        baseEfficiency = 32;
        pkgName = 'سامانه هوشمند لجستیک و بهینه‌سازی زنجیره تأمین';
        deployWeeks = 8;
      } else if (moduleType === 'venture') {
        baseEfficiency = 45;
        pkgName = 'برنامه سرمایه‌گذاری مشترک و توسعه ونچر (شماره ثبت ۳۶۵)';
        deployWeeks = 10;
      } else if (moduleType === 'cloud') {
        baseEfficiency = 40;
        pkgName = 'زیرساخت ابری اختصاصی و امنیت داده سازمانی';
        deployWeeks = 3;
      }

      const calculatedEfficiency = Math.min(68, Math.round(baseEfficiency * (0.85 + scaleFactor * 0.15) * (months / 12 * 0.25 + 0.75)));
      const totalWeeks = Math.max(2, Math.round(deployWeeks * (scaleFactor * 0.4 + 0.6)));

      if (outSaving) outSaving.textContent = '+' + toPersianDigits(calculatedEfficiency) + '٪ بهبود بهره‌وری عملیاتی';
      if (outTimeline) outTimeline.textContent = toPersianDigits(totalWeeks) + ' هفته کاری تا بهره‌برداری کامل';
      if (outPackage) outPackage.textContent = pkgName;
      if (orderEstimatedBtn) {
        orderEstimatedBtn.setAttribute('data-order-product', pkgName + ' (' + toPersianDigits(months) + ' ماهه)');
      }
    }

    scaleSelect.addEventListener('change', calculate);
    moduleSelect.addEventListener('change', calculate);
    durationInput.addEventListener('input', calculate);
    calculate();
  }

  // Format Iranian Mobile Inputs Live with Persian Numerals
  function initMobileInputFormatting() {
    const mobileInputs = document.querySelectorAll('input[data-iran-mobile]');
    mobileInputs.forEach(function (input) {
      input.addEventListener('input', function () {
        const rawDigits = toEnglishDigits(input.value).replace(/\D/g, '').slice(0, 11);
        input.value = toPersianDigits(rawDigits);
        const errEl = input.parentElement.querySelector('.form-error-msg');
        if (rawDigits.length > 0 && isValidIranianMobile(rawDigits)) {
          input.classList.remove('input-error');
          if (errEl) errEl.classList.remove('visible');
        }
      });
    });
  }

  // Telegram Ordering & Partnership Request Modal
  function initTelegramOrderModal() {
    const modal = document.getElementById('telegram-order-modal');
    if (!modal) return;

    const closeBtn = document.getElementById('modal-close-btn');
    const productInput = document.getElementById('order-product-name');
    const nameInput = document.getElementById('order-applicant-name');
    const companyInput = document.getElementById('order-company-name');
    const mobileInput = document.getElementById('order-mobile');
    const scaleInput = document.getElementById('order-scale');
    const notesInput = document.getElementById('order-notes');
    const form = document.getElementById('telegram-order-form');
    const resultBox = document.getElementById('order-generated-box');
    const summaryPre = document.getElementById('order-summary-text');
    const directTgLink = document.getElementById('order-direct-tg-link');
    const copyBtn = document.getElementById('order-copy-btn');

    function openModal(productTitle) {
      if (productInput && productTitle) {
        productInput.value = productTitle;
      }
      if (resultBox) {
        resultBox.style.display = 'none';
      }
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      if (nameInput) nameInput.focus();
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }

    // Bind all trigger buttons across the page
    document.addEventListener('click', function (e) {
      const trigger = e.target.closest('[data-order-product]');
      if (trigger) {
        e.preventDefault();
        const prod = trigger.getAttribute('data-order-product') || 'درخواست همکاری و مشاوره سازمانی هلدینگ ایس';
        openModal(prod);
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        let valid = true;
        const nameErr = document.getElementById('err-order-name');
        const mobileErr = document.getElementById('err-order-mobile');

        if (!nameInput.value.trim()) {
          nameInput.classList.add('input-error');
          if (nameErr) nameErr.classList.add('visible');
          valid = false;
        } else {
          nameInput.classList.remove('input-error');
          if (nameErr) nameErr.classList.remove('visible');
        }

        if (!isValidIranianMobile(mobileInput.value)) {
          mobileInput.classList.add('input-error');
          if (mobileErr) mobileErr.classList.add('visible');
          valid = false;
        } else {
          mobileInput.classList.remove('input-error');
          if (mobileErr) mobileErr.classList.remove('visible');
        }

        if (!valid) return;

        const trackingCode = 'ACE-۳۶۵-' + toPersianDigits(Math.floor(1000 + Math.random() * 9000));
        const productTitle = productInput ? productInput.value.trim() : 'راهکار سازمانی هلدینگ ایس';
        const applicant = nameInput.value.trim();
        const company = (companyInput && companyInput.value.trim()) ? companyInput.value.trim() : 'ثبت نشده';
        const mobile = mobileInput.value.trim();
        const scale = scaleInput ? scaleInput.value : 'سازمانی';
        const notes = (notesInput && notesInput.value.trim()) ? notesInput.value.trim() : 'بدون توضیحات تکمیلی';

        const messageLines = [
          'درخواست رسمی همکاری / ثبت سفارش — هلدینگ ایس (شماره ثبت ۳۶۵)',
          '────────────────────────',
          'کد پیگیری پرونده: ' + trackingCode,
          'محصول / راهکار درخواستی: ' + productTitle,
          'نام و نام خانوادگی: ' + applicant,
          'نام شرکت / مجموعه: ' + company,
          'شماره موبایل تماس: ' + mobile,
          'مقیاس همکاری: ' + scale,
          'توضیحات تکمیلی: ' + notes,
          '────────────────────────',
          'ارسال‌شده از پورتال رسمی هلدینگ ایس (ACE Holding)'
        ];

        const fullMessage = messageLines.join('\n');

        if (summaryPre) {
          summaryPre.textContent = fullMessage;
        }

        if (directTgLink) {
          const encodedText = encodeURIComponent(fullMessage);
          const encodedUrl = encodeURIComponent(window.location.href);
          directTgLink.setAttribute('href', 'https://t.me/share/url?url=' + encodedUrl + '&text=' + encodedText);
        }

        if (resultBox) {
          resultBox.style.display = 'block';
          resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }

    if (copyBtn && summaryPre) {
      copyBtn.addEventListener('click', function () {
        const text = summaryPre.textContent;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            const orig = copyBtn.textContent;
            copyBtn.textContent = 'متن سفارش با موفقیت کپی شد ✓';
            setTimeout(function () {
              copyBtn.textContent = orig;
            }, 2500);
          });
        }
      });
    }
  }

  // Contact Page Form Validation & Direct Submission Handler
  function initContactPageForm() {
    const contactForm = document.getElementById('enterprise-contact-form');
    if (!contactForm) return;

    const deptButtons = document.querySelectorAll('[data-dept-select]');
    const deptInput = document.getElementById('contact-department');
    const deptSlaText = document.getElementById('contact-dept-sla');

    deptButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        deptButtons.forEach(function (b) {
          b.classList.toggle('active', b === btn);
        });
        const deptName = btn.getAttribute('data-dept-select');
        const slaInfo = btn.getAttribute('data-dept-sla');
        if (deptInput) deptInput.value = deptName;
        if (deptSlaText && slaInfo) deptSlaText.textContent = slaInfo;
      });
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const fullName = document.getElementById('contact-fullname');
      const mobile = document.getElementById('contact-mobile');
      const email = document.getElementById('contact-email');
      const company = document.getElementById('contact-company');
      const message = document.getElementById('contact-message');

      const errName = document.getElementById('err-contact-name');
      const errMobile = document.getElementById('err-contact-mobile');
      const errMsg = document.getElementById('err-contact-message');

      let isValid = true;

      if (!fullName || !fullName.value.trim()) {
        if (fullName) fullName.classList.add('input-error');
        if (errName) errName.classList.add('visible');
        isValid = false;
      } else {
        fullName.classList.remove('input-error');
        if (errName) errName.classList.remove('visible');
      }

      if (!mobile || !isValidIranianMobile(mobile.value)) {
        if (mobile) mobile.classList.add('input-error');
        if (errMobile) errMobile.classList.add('visible');
        isValid = false;
      } else {
        mobile.classList.remove('input-error');
        if (errMobile) errMobile.classList.remove('visible');
      }

      if (!message || message.value.trim().length < 10) {
        if (message) message.classList.add('input-error');
        if (errMsg) errMsg.classList.add('visible');
        isValid = false;
      } else {
        message.classList.remove('input-error');
        if (errMsg) errMsg.classList.remove('visible');
      }

      if (!isValid) return;

      const feedbackBox = document.getElementById('contact-success-panel');
      const refCodeEl = document.getElementById('contact-ref-code');
      const tgDispatchBtn = document.getElementById('contact-tg-dispatch');

      const refId = 'ACE-REQ-' + toPersianDigits(Math.floor(10000 + Math.random() * 90000));
      if (refCodeEl) refCodeEl.textContent = refId;

      const deptVal = deptInput ? deptInput.value : 'کمیته سرمایه‌گذاری و توسعه کسب‌وکار';
      const tgText = [
        'پیام رسمی سازمانی — هلدینگ ایس (ثبت ۳۶۵)',
        'شماره پیگیری: ' + refId,
        'واحد مقصد: ' + deptVal,
        'فرستنده: ' + fullName.value.trim() + (company && company.value.trim() ? ' (' + company.value.trim() + ')' : ''),
        'تلفن همراه: ' + mobile.value.trim(),
        'ایمیل: ' + (email && email.value.trim() ? email.value.trim() : 'ثبت نشده'),
        'شرح درخواست: ' + message.value.trim()
      ].join('\n');

      if (tgDispatchBtn) {
        tgDispatchBtn.setAttribute(
          'href',
          'https://t.me/share/url?url=' + encodeURIComponent(window.location.href) + '&text=' + encodeURIComponent(tgText)
        );
      }

      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  // Initialize Everything on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initEcosystemDiagram();
    initEligibilityChecklist();
    initProductsFilter();
    initRoiEstimator();
    initMobileInputFormatting();
    initTelegramOrderModal();
    initContactPageForm();
  });
})();
