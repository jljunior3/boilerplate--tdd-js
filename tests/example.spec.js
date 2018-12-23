/* eslint-disable func-names */
describe('Main', () => {
  describe('Method A', () => {
    context('Case 1', () => {
      // eslint-disable-next-line prefer-arrow-callback
      it('should happen blabla', function () {
        // espera que acontença
        // entra dados / metodo sum(2,2)
        // espera retornar (4) => true ! 3 => false => broken test
      });
    });

    context('Case 2', () => {
      it('should happen blabla', () => {
        // espera que acontença
        // entra dados / metodo sum(2,2)
        // espera retornar (4) => true ! 3 => false => broken test
      });
      it('should happen mimimi', () => {
        // espera que acontença
        // entra dados / metodo sum(2,2)
        // espera retornar (4) => true ! 3 => false => broken test
      });
    });
  });

  describe('Method B', () => {

  });
});
