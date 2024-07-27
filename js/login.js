function createLoginModal() {
    return `
    <div
        class="modal fade"
        id="snowModal"
        tabindex="-1"
        aria-hidden="true"
        >
        <div class="login-dialog modal-dialog modal-dialog-centered">
          <!-- 登入 -->
          <div class="modal-content login-content">
            <div class="modal-header">
              <h5 class="modal-title mx-auto">登入</h5>
            </div>
            <div class="modal-body">
              <div class="modal-wrapper">
                <form>
                  <div class="mb-3">
                    <label for="email" class="col-form-label">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="請輸入您的電子郵件" required>
                  </div>
                  <div class="mb-3">
                    <label for="pw" class="col-form-label">密碼</label>
                    <input type="text" class="form-control" id="pw" placeholder="請輸入6~16位密碼" required>
                  </div>
                  <div class="d-flex justify-content-end">
                    <button type="button" class="btn btn-forgetPw border-0 arrow-right" onclick="forgetPwModal()">忘記密碼</button>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn border-0 btn-primary btn-login">
                      登入
                    </button>
                  </div>
                </form>
                <div class="login-info">
                  滑雪趣已停用臉書登入功能，原帳號如綁定臉書登入<br>
                  請點選「<button type="button" class="btn text-blue-light p-0" onclick="forgetPwModal()">忘記密碼</button>」以設定新密碼進行登入！
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <p class="bold">尚未加入會員？</p>
              <button
                type="button"
                class="btn border-0 button-link arrow-right"
                onclick="registerModal()"
              >
                註冊
              </button>
            </div>
          </div>
          <!-- 忘記密碼 -->
          <div class="modal-content forgetPW-content">
            <div class="modal-header">
              <h5 class="modal-title mx-auto" id="forgetPW">忘記密碼</h5>
            </div>
            <div class="modal-body">
              <div class="modal-wrapper">
                <p class="forget-info">
                  請輸入您的信箱，系統將會發送重設密碼連結至您的信箱
                </p>
                <form>
                  <div class="mb-3">
                    <label for="email" class="col-form-label">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="請輸入您的電子郵件" required>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary btn-login">
                      發送
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
            </div>
          </div>
          <!-- 註冊 -->
          <div class="modal-content register-content">
            <div class="modal-header">
              <h5 class="modal-title mx-auto">註冊</h5>
            </div>
            <div class="modal-body">
              <div class="modal-wrapper">
                <form>
                  <div class="mb-3">
                    <label for="nickname" class="col-form-label">暱稱</label>
                    <input type="text" class="form-control" id="nickname" placeholder="請輸入您的姓名或暱稱" required>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="col-form-label">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="請輸入您的電子郵件(帳號)" required>
                  </div>
                  <div class="mb-3">
                    <label for="pw" class="col-form-label">密碼</label>
                    <input type="text" class="form-control" id="pw" placeholder="請輸入6~16位密碼" required>
                  </div>
                  <div class="mb-3">
                    <label for="pw_2" class="col-form-label">確認密碼</label>
                    <input type="text" class="form-control" id="pw_2" placeholder="請再次輸入您的密碼" required>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary btn-login">
                      註冊
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <p class="bold">已有帳號？</p>
              <button
                type="button"
                class="btn border-0 arrow-right button-link"
                onclick="loginModal()"
              >
                登入
              </button>
            </div>
          </div>
        </div>
      </div>`;
  }

  // 在页面加载完成后插入模态框
  $(document).ready(function() {
    // 将创建的HTML插入到指定的容器中
    $('#sharedModalContainer').html(createLoginModal());
  });

  function registerModal() {
    document.querySelector('.forgetPW-content').classList.remove('show');
    document.querySelector('.login-content').classList.remove('show');
    document.querySelector('.register-content').classList.add('show');
  }
  function forgetPwModal() {
    document.querySelector('.login-content').classList.remove('show');
    document.querySelector('.register-content').classList.remove('show');
    document.querySelector('.forgetPW-content').classList.add('show');
  }
  function loginModal(){
    document.querySelector('.forgetPW-content').classList.remove('show');
    document.querySelector('.register-content').classList.remove('show');
    document.querySelector('.login-content').classList.add('show');
  }