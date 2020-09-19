# Recuperação de Senha

**RF**

- O usuário deve poder recuperar sua ssenha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em ambiente de produção;
- O envio de emails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar a senha deve expirar em 2 horas;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do Perfil

**RF**

- O usuário deve poder atualizar seu perfil (nome, email e senha);

**RNF**

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário deve confirmar a nova senha;

# Painel do Prestador

**RF**

- O usuário deve poder listar os agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder vidualizar as notificações não lidas

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados no cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um estado de lida ou não-lida para que o prestador possa controlar;

# Agendamento de Serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1 hora exatamente;
- Os agendamentos deve ficar disponíveis entre das 8h às 18h (primeiro às 8h, últmo às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
